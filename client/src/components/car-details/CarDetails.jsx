import { useContext, useEffect, useState, useReducer } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import * as carService from "../../services/carService";
import * as commentService from "../../services/commentService";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/AuthContext";
import { pathToUrl } from "../../utils/pathUtil";

import styles from "./CarDetails.module.css";

export default function CarDetails() {
  const navigate = useNavigate();
  const { email, userId } = useContext(AuthContext);
  const [car, setCar] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const { carId } = useParams();

  useEffect(() => {
    carService.getSingleCar(carId).then(setCar);

    commentService.getAll(carId).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });
  }, [carId]);

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(carId, values.comment);

    newComment.owner = { email };

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });
  };

  const deleteButtonHandler = async () => {
    const confirmation = confirm(
      `Are you sure you want to delete the ${car.brand} ${car.model}?`
    );

    if (confirmation) {
      await carService.remove(carId);

      navigate("/cars");
    }
  };

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: "",
  });

  return (
    <div className={styles.carDetailsContainer}>
      <h2>Car Details</h2>
      <div className={styles.detailsContent}>
        <img src={car.imageUrl} alt="Car" />
        <p>
          <strong>Brand:</strong> {car.brand}
        </p>
        <p>
          <strong>Model:</strong> {car.model}
        </p>
        <p>
          <strong>Year:</strong> {car.year}
        </p>
        <p>
          <strong>Price:</strong> {car.price}
        </p>
        <p>
          <strong>Description:</strong> {car.description}
        </p>

        <div className="commentsSection">
          <h2>Comments:</h2>
          <ul className="commentsList">
            {comments.map(({ _id, text, owner: { email } }) => (
              <li key={_id} className="comment">
                <p>
                  {email}: {text}
                </p>
              </li>
            ))}
          </ul>

          {comments.length === 0 && <p className="no-comment">No comments.</p>}
        </div>

        <Link to={"/cars"} className={styles.actionButton}>
          Back
        </Link>

        {userId === car._ownerId && (
          <>
            <Link
              to={pathToUrl("/cars/:carId/edit", { carId })}
              className={styles.actionButton}
            >
              Edit
            </Link>
            <button
              className={styles.actionButton}
              onClick={deleteButtonHandler}
            >
              Delete
            </button>
          </>
        )}

        <article className={styles.createComment}>
          <label>Add new comment:</label>
          <form className="form" onSubmit={onSubmit}>
            <textarea
              name="comment"
              value={values.comment}
              onChange={onChange}
              placeholder="Comment......"
            ></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      </div>
    </div>
  );
}
