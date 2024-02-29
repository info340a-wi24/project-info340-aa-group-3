import React from 'react';

export default function FeedbackPage() {
  return (
    <div>
      <div id="feedback">
        <h2>Submit Feedback</h2>
        <div>
          <label for="name-input">Name: </label>
          <input name="name" placeholder="" />
        </div>
        <div>
          <label for="email-input">Email: </label>
          <input name="email" placeholder="" />
        </div>
        <div>
          <label for="feedback">Feedback: </label>
          <textarea id="feedback-input" name="feedback" />    
        </div>
        <button><a id="submit" class="btn btn-primary" role="button" href="confirm.html" title="Home"> Submit </a></button>
      </div>
    </div>
  );
}