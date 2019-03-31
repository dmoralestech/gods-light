import React from 'react';


const Card = props => {
  return (
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle">Card subtitle</h6>
      </div>
      <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&amp;txt=318%C3%97180&amp;w=318&amp;h=180"
           alt="Card image"/>
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">Card Link</a>
          <a href="#" class="card-link">Another
            Link</a>
        </div>
    </div>
  )};

  export default Card;
