import React, { useState, useCallback, useRef } from "react";
import Button from "@material-ui/core/Button";

const RecordList = (props) => {
  const [records, setRecords] = useState([
    {
      no: 1,
      user: "강다혜",
      title: "재미있었다.",
      cnt: 0,
    },
    {
      no: 2,
      user: "이겨레",
      title: "독서모임또하자",
      cnt: 7,
    },
  ]);
  const nextId = useRef(records.length + 1);
  const onCount = useCallback((e) => {
    console.log(e);
  }, []);
  const onClick = useCallback((e) => {
    console.log(e);
  }, []);

  const recordRow = records.map((record) => (
    <tr key={record.no} onClick={onCount}>
      <td>{record.no}</td>
      <td>{record.user}</td>
      <td>{record.title}</td>
      <td>{record.cnt}</td>
    </tr>
  ));

  return (
    <>
      <h2>{props.title}</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>작성자</th>
            <th>Title</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>{recordRow}</tbody>
      </table>
      <Button onClick={onClick}>글쓰기</Button>
    </>
  );
};

export default RecordList;
