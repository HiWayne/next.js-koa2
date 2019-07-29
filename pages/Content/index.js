import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { mapStateToContentProps as mapStateToProps } from "../../shared/store";
import { mapDispatchToContentProps as mapDispatchToProps } from "../../shared/store";
import styled from "@emotion/styled";

const FormWrapper = styled.div`
  margin-bottom: 10px;
`;

const ButtonInline = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: rgb(177, 174, 174);
  cursor: pointer;
`;

const Content = props => {
  const [load, setLoad] = useState(0);
  const inputRemoveEl = useRef(null);
  const inputChangeElIndex = useRef(null);
  const inputChangeElValue = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      props.pageTransitionReadyToEnter();
      setLoad(1);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const list = props.list.map(item => <li key={item}>{item}</li>);
  const formatIndex = e => {
    let value = parseInt(e.target.value);
    e.target.value = value ? value : "";
  };

  return load ? (
    <>
      <p>This is Content page</p>
      <ul>{list}</ul>
      <div>
        <FormWrapper>
          <ButtonInline
            onClick={() => {
              props.addList(props.list[list.length - 1] + 1);
            }}
          >
            结尾自增加
          </ButtonInline>
        </FormWrapper>
        <FormWrapper>
          删除项
          <input ref={inputRemoveEl} onChange={formatIndex} />
          <br />
          <ButtonInline
            onClick={() => {
              const index = inputRemoveEl.current.value;
              if (index) props.removeList(index - 1);
              inputRemoveEl.current.value = "";
            }}
          >
            指定删除
          </ButtonInline>
        </FormWrapper>
        <FormWrapper>
          <span>修改项</span>
          <input ref={inputChangeElIndex} onChange={formatIndex} />
          <span>值</span>
          <input ref={inputChangeElValue} />
          <br />
          <ButtonInline
            onClick={() => {
              props.changeList(
                inputChangeElIndex.current.value - 1,
                inputChangeElValue.current.value
              );
              inputChangeElIndex.current.value = "";
              inputChangeElValue.current.value = "";
            }}
          >
            指定修改
          </ButtonInline>
        </FormWrapper>
      </div>
    </>
  ) : null;
};

Content.pageTransitionDelayEnter = true;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
