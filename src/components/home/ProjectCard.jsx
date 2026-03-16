import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const getPublicAssetUrl = (assetPath) => {
  if (!assetPath) return "";
  const basePath = process.env.PUBLIC_URL || "";
  const normalized = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return encodeURI(`${basePath}${normalized}`);
};

const ProjectCard = ({ value }) => {
  if (value.customProject) {
    return <CustomProjectCard value={value} />;
  }

  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{(!description)?"":description || <Skeleton count={3} />} </Card.Text>
          {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
          <hr />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )}
          {value ? (
            <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CustomProjectCard = ({ value }) => {
  const {
    name,
    description,
    location,
    model,
    totalCount,
    primaryImage,
    gallery = [],
    artifacts = [],
  } = value;

  const heroImage = getPublicAssetUrl(primaryImage);

  return (
    <Col md={12}>
      <Card className="card shadow-lg p-3 mb-5 rounded project-card-dark">
        <Card.Body>
          <Card.Title as="h5">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="pb-2">
            {model ? <span className="badge badge-secondary mr-2 mb-2 tern-pill tern-pill-model">{model}</span> : null}
            {location ? <span className="badge badge-light mr-2 mb-2 tern-pill tern-pill-location">{location}</span> : null}
            {typeof totalCount === "number" ? (
              <span className="badge badge-dark mb-2 tern-pill tern-pill-count">
                Total Terns: {totalCount.toLocaleString("en-US")}
              </span>
            ) : null}
          </div>
          {heroImage ? (
            <a href={heroImage} target="_blank" rel="noopener noreferrer">
              <img
                src={heroImage}
                alt={`${name} labeled output`}
                className="tern-main-image"
              />
            </a>
          ) : null}
          {gallery.length ? (
            <>
              <hr />
              <h6>Project Assets</h6>
              <div className="tern-gallery">
                {gallery.map((assetPath) => {
                  const assetUrl = getPublicAssetUrl(assetPath);
                  const assetName = assetPath.split("/").pop() || "project-asset";
                  return (
                    <a
                      href={assetUrl}
                      key={assetPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={assetName}
                    >
                      <img src={assetUrl} alt={assetName} className="tern-gallery-thumb" />
                    </a>
                  );
                })}
              </div>
            </>
          ) : null}
          {artifacts.length ? (
            <div className="pt-3">
              {artifacts.map((artifact) => (
                <a
                  key={artifact.path}
                  href={getPublicAssetUrl(artifact.path)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light mr-2 mt-2"
                >
                  {artifact.label || "Artifact"}
                </a>
              ))}
            </div>
          ) : null}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <>
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary mr-3"
      >
        <i className="fab fa-github" /> Clone Project
      </a>
      <a href={svn_url} target=" _blank" className="btn btn-outline-secondary">
        <i className="fab fa-github" /> Repo
      </a>
    </>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
            <a
              key={language} 
              className="badge badge-light card-link"
              href={repo_url + `/search?l=${language}`}
              target=" _blank"
            >
              {language}:{" "}
              {Math.trunc((data[language] / total_count) * 1000) / 10} %
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
