import React from 'react';
import { Outlet } from 'react-router-dom';
import Testimonials from './Testimonials';
import ProtestHistorySlider from './ProtestHistorySlider';
import { Link } from 'react-router-dom';

export default function HomePage(props) {
    return (
        <div>
            <div class="search-bar">
                <input type="text" placeholder="Search protests.." name="search" /> 
                <Link className="btn btn-primary" to={`/protest-list`} title="Protests" > </Link> 
            </div>
            <ProtestHistorySlider />
            <Testimonials />
            <Outlet />   
        </div>
    )
}