import React from 'react';

export default function ProtestHistorySlider(props) {
    return (
        <div>
            <section class="container text-center">
                <h2 class="text-decoration-underline">Protests in History</h2>
            <div class="image-slide-wrapper">
                <div class="image-slider">
                    <img id="slide-1" src="images/vietnam_war.png" alt="Protestors against the Vietnam War in 1965, holding signs at a march."/>
                    <img id="slide-2" src="images/police-brutality.png" alt="Protestors fighting for jobs and freedom with the NAACP in 1963, holding signs at the march."/>
                    <img id="slide-3" src="images/women-voting.png" alt="Suffragettes in New York fighting for a woman's right to vote, holding signs at a meeting."/>
                </div>
                <div class="slider-nav">
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>
                    <a href="#slide-3"></a>
                </div>
            </div>
            </section>
        </div>
    )
}