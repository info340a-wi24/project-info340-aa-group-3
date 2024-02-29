import React from 'react';

export default function Interview() {
  return (
    <section className="quotes text-center">
      <h2 className="text-decoration-underline">Testimonials</h2>
      <figure>
        <blockquote className="blockquote">
          <p>"With Protests Hub, I feel empowered to be involved with my community and speak out on issues close to my heart."</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Aelysha Sharma
        </figcaption>
      </figure>
      <figure>
        <blockquote className="blockquote">
          <p>"The attention to detail, from coverage of protest categories to spotlighting user feedback, is commendable."</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Michaela Tran
        </figcaption>
      </figure>
    </section>
  );
}