import React from 'react';

export default function Testimonials(props) {
    const emptySearchTerm = props.currSearch;
        return (
            <div>
                <section class="quotes text-center">
                    <h2 class="text-decoration-underline">Testimonials</h2>
                    <figure>
                        <blockquote class="blockquote">
                            <p>"With Protests Hub, I feel empowered to be involved with my community and speak out on issues close to my heart."</p>
                        </blockquote>
                        <figcaption class="blockquote-footer"> 
                        Aelysha Sharma
                        </figcaption>
                    </figure>
                    <figure>
                        <blockquote class="blockquote">
                        <p>"The attention to detail, from coverage of protest categories to spotlighting user feedback, is commendable."</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                        Michaela Tran
                        </figcaption>
                    </figure>
                </section>
            </div>
        );
}