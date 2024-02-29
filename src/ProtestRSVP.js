import React from 'react';

export default function ProtestRSVP() {
  return (
    <div>
      <h2>
          RSVP for this protest
      </h2>
      <div id="rsvp">
      <div id="top">
        <p> RSVP </p>
        <button id="x" type="x-button"><a href="index.html" title="Home" style="text-decoration: none"> X </a></button>    
      </div>
      <div id="input">
        <div>
          <label for="name-input">Name: </label>
          <input name="name" placeholder="name" />
        </div>
        <div>
          <label for="email-input">Email: </label>
          <input name="email" placeholder="email" />
        </div>
      </div>
      <button><a id="submit" class="btn btn-primary" role="button" href="rsvp-confirm.html" title="Home"> Submit </a></button> 
      </div>

      <div id="rsvp">
        <div id="top">
          <p> RSVP </p>
          <button id="x" type="x-button"><a href="index.html" title="Home" style="text-decoration: none"> X </a></button>    
        </div>
        <p id="confirm"> 
          You have successfully RSVPed for this protest. 
          You will be notified with further details if any updates are made. 
          Otherwise, you can expect a reminder 2 days before the planned event. 
          Please close this pop-up. 
          Thank you! 
        </p>
      </div>
    </div>
  );
}