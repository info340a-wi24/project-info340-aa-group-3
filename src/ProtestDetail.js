import React from 'react';
// ProtestRSVP from './ProtestRSVP'; // might not need
import {Link} from 'react-router-dom';

export default function ProtestDetail() {
  return (
    <main>
      <section class="search"> 
        <h2 id="slogan">Make your voice heard. Find your people. It all starts with a search.</h2>
        <div class="search-bar">
          <input type="text" placeholder="Search protests.." name="search" /> 
          <a href="protest-list.html" title="Protests" style="text-decoration: none">
            <button type="submit">
              <i class="fa fa-search" title= "Search" aria-hidden="true"></i>
            </button>  
          </a> 
          <p class="text-center">Search Results For: "Protests in Washington"</p>
        </div>
      </section>
      <section>
          <div class="protest-list">
            <div class="row justify-content-center">
              <div class="col-auto">
                <div class="card mt-3" style="width: 30rem;">
                  <img class="card-img-top" src="img/if-not-now.png" alt="Logo for If Not Now" />
                  <div class="card-body">
                    <h5 class="card-title">Stop Military Aid -leafletting event</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Organized by: If Not Now</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Category: Israeli Occupation</li>
                      <li class="list-group-item">Date: Saturday, February 10th</li>
                      <li class="list-group-item">Time: 1:00-3:00 PM (PST)</li>
                      <li class="list-group-item">Location: PCC Community Markets - Columbia City Co-op</li>
                      <li class="list-group-item">Address: 3610 S Edmunds St Seattle, WA 98118</li>
                  </ul>
                  <div class="card-body">
                    <a href="protest1-about.html" class="btn btn-primary">Read More</a>
                    <Link to="ProtestRSVP" class="btn btn-secondary">RSVP</Link>
                  </div>
                </div>
              <div class="card mt-3" style="width: 30rem;" >
                <img class="card-img-top" src="img/bigger-than-roe.png" alt="Protesters in masks hold signs for female empowerment." />
                <div class="card-body">
                  <h5 class="card-title">Bigger Than Roe Rally</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Organized by: Indivisible Whidbey</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Category: Reproductive Healthcare</li>
                    <li class="list-group-item">Date: Saturday, February 17th</li>
                    <li class="list-group-item">Time: 10:00 AM - 12:00 PM (PST)</li>
                    <li class="list-group-item">Location: Coupeville Overpass</li>
                    <li class="list-group-item">Address: State Route 20 & North Main Street, Coupeville, WA 98239</li>
                </ul>
                <div class="card-body">
                  <a href="protest2-about.html" class="btn btn-primary">Read More</a>
                  <Link to="/ProtestRSVP" class="btn btn-secondary">RSVP</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}