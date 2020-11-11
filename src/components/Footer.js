import React from "react";

export default function Footer(props) {
  if (!props.leftContent && !props.rightContent) {
    return null;
  }
  return (
    <div>
      <footer className="main-footer clearfix">
        {props.rightContent && (
          <div className="float-right d-none d-sm-inline">
            {props.rightContent}
          </div>
        )}
        {props.leftContent && props.leftContent}
      </footer>
    </div>
  );
}
