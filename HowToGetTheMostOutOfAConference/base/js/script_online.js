/**
 * Created by heiglandreas on 08.07.14.
 */
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    fragments: true,
    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'fade', // default/cube/page/concave/zoom/linear/fade/none

    // Parallax scrolling
    // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
    // parallaxBackgroundSize: '2100px 900px',

    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'https://rawgit.com/hakimel/reveal.js/master/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'https://rawgit.com/hakimel/reveal.js/master/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'https://rawgit.com/hakimel/reveal.js/master/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'https://rawgit.com/hakimel/reveal.js/master/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'https://rawgit.com/hakimel/reveal.js/master/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'https://rawgit.com/hakimel/reveal.js/master/plugin/notes/notes.js' , async: true, condition: function() { return !!document.body.classList; } }
    ]
});
