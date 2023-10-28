import moment from "moment";
import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import {
  FaBookmark,
  FaEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className=" mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image
          height="40px"
          width="40px"
          src={author.img}
          roundedCircle
        ></Image>
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format("yyy-MM-D")}</small>
          </p>
        </div>
        <div className="">
          <FaBookmark></FaBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url}></Card.Img>
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <span className="me-1">{rating?.number}</span>
          <Rating
            placeholderRating={rating?.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
            readonly
          />
        </div>
        <div>
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
