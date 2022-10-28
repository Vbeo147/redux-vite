import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { actionCreators } from "../store";

function Detail({ toDos, onBtnClick }) {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  const navigate = useNavigate();
  const handleDelete = () => {
    onBtnClick(parseInt(id));
    navigate(-1);
  };
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Create at : {toDo?.id}</h5>
      <div>
        <button onClick={handleDelete}>DEL</button>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return { onBtnClick: (id) => dispatch(actionCreators.deleteToDo(id)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
