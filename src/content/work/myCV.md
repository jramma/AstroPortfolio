---
title: My CV
publishDate: 2023-08-27 00:00:00
img: /assets/cv.jpg
img_alt: My personal CV.
description: |
  My personal CV made with Canva.
tags:
  - CV
---


<a class="dwn" href="/assets/649369845.pdf" > Download pdf</a>



<style>
  
  .dwn{
		position: relative;
		display: flex;
		place-content: center;
		text-align: center;
		padding: 0.56em 2em;
		gap: 0.8em;
		color: var(--accent-text-over);
		text-decoration: none;
		line-height: 1.1;
		border-radius: 999rem;
		overflow: hidden;
		background: var(--gradient-accent-orange);
		box-shadow: var(--shadow-md);
		white-space: nowrap;
	}

	@media (min-width: 20em) {
		.dwn  {
			font-size: var(--text-lg);
		}
	}

	/* Overlay for hover effects. */
	.dwn::after {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		transition: background-color var(--theme-transition);
		mix-blend-mode: overlay;
	}

	.dwn:focus::after,
	.dwn:hover::after {
		background-color: hsla(var(--gray-999-basis), 0.3);
	}

	@media (min-width: 50em) {
		.dwn{
			padding: 1.125rem 2.5rem;
			font-size: var(--text-xl);
		}
	}
</style>