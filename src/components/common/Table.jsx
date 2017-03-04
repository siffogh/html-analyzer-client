import React from 'react';
import _ from 'lodash/fp';

const convertObjJSX = (o) => {
  if (!o || o === '' || (typeof o === 'object' && _.isEmpty(o))) {
    return <span className="glyphicon glyphicon-remove" />;
  }

  if (o === true || o === 0) {
    return <span className="glyphicon glyphicon-ok" />;
  }

  if (typeof o === 'string' || typeof o === 'number') {
    return o;
  }
  return (
    <ul className="list-group">
      {
      _.pipe(
        _.toPairs,
        _.map(([key, value]) => (<li className="list-group-item"><strong>{key}: </strong>{convertObjJSX(value)}</li>)),
      )(o)
    }
    </ul>
  );
};

export default ({ content }) => {
  if (!content) {
    return (<span />);
  }
  return (
    <div className="analysis-table">
      <ul className="list-group">
        {convertObjJSX(content)}
      </ul>
    </div>
  );
};

