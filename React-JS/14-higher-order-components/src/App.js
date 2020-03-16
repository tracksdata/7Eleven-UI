import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TopicsList from './components/TopicsList';
import CommentsList from './components/CommentsList';

function App() {
  return (
    <div className="container">

      <div className="row">
        <div className="col-6 col-sm-6 col-md-6">
          <TopicsList />
        </div>

        <div className="col-6 col-sm-6 col-md-6">
          <CommentsList commentsList={['java', 'reactjs','javascripte']} />
        </div>
      </div>

    </div>
  );
}

export default App;
