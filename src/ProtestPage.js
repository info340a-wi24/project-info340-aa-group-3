import React from 'react';
import Picture from './Picture';
import Interview from './Interview';

export default function ProtestPage() {
  return (
    <div>
      <section className="search"> 
        <h2 id="slogan">Make your voice heard. Find your people. It all starts with a search.</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search protests.." name="search" /> 
          <a href="protest-list.html" title="Protests" style="text-decoration: none">
            <button type="submit">
              <i className="fa fa-search" title= "Search" aria-hidden="true"></i>
            </button>  
          </a> 
        </div>
      </section>
      <div>
        <Picture />
      </div>
      <div>
        <Interview />
      </div>
    </div>
  );
}