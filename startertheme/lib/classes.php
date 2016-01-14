<?php

/**
 *
 * Custom function for applying common classes to the body tag, depending on the current view
 *
 * @since 1.0.0
 * @author Calvin Koepke
 *
 */

add_filter( 'body_class', 'startertheme_body_classes' );
function startertheme_body_classes( $classes ) {

	if ( is_home() || is_page_template( 'page_blog.php' ) )
		$classes[] = 'blog-page';

	if ( is_front_page() )
		$classes[] = 'front-page';

	if ( is_archive() )
		$classes[] = 'archive-page';

	if ( is_category() )
		$classes[] = 'category-page';

	if ( is_tag() )
		$classes[] = 'tag-page';

	if ( is_search() )
		$classes[] = 'search-page';

	return $classes;

}