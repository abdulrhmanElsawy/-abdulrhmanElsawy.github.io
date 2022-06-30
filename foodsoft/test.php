<section id="post-<?php the_ID(); ?>" class="site-section section-post hentry <?php echo apply_filters('a4h_filter_post_header_style', a4h_options('post_header_style')); ?>" role="main" data-next-post="<?php a4h_get_adjacent_post_permalink('next'); ?>" data-previous-post="<?php a4h_get_adjacent_post_permalink('prev'); ?>">
	<?php do_action('a4h_hook_ad_location_title_above'); ?>
	<header class="d-flex align-items-center page-header">
		<?php do_action('a4h_hook_singular_header_start'); ?>
		<div class="flex-grow page-header-inner">
			<?php do_action('a4h_hook_singular_title_before'); ?>
			<h1 class="page-title entry-title"><?php the_title(); ?></h1>
			<?php a4h_post_meta(); ?>
			<?php do_action('a4h_hook_singular_title_after'); ?>
		</div>
		<?php do_action('a4h_hook_singular_header_end'); ?>
	</header>
	<?php do_action('a4h_hook_singular_header_after'); ?>
	<?php a4h_post_sharing_buttons('top'); ?>
	<?php do_action('a4h_hook_ad_location_title_below'); ?>
	<div class="content-inner">
		<div class="post-inner">
			<?php a4h_post_image(); ?>
			<div class="d-lg-flex entry-content-outer">
				<?php do_action('a4h_hook_entry_content_before'); ?>
				<div class="clearfix flex-grow post-content entry-content">
					<?php do_action('a4h_hook_entry_content_start'); ?>
					<div class="entry-content-inner">
						<?php a4h_the_content(); ?>
					</div>
										<?php
$all_tags = get_the_tags($post->ID);
$tag_id = array();
foreach( $all_tags as $tag ) {
    $tag_id[] = $tag->term_id;
}
   
	$related2 = get_posts( 
    array( 
        'tag__in' => $tag_id,
        'numberposts'  => 7, 
        'post__not_in' => array( $post->ID ) 
    ) 
);

if( $related2 ) { 
	?>
					<h4>قد يهمك أيضاً :-</h4><ol>
					<?
    foreach( $related2 as $post ) {
        setup_postdata($post);
		?>
					<li class="maylike"><a href="<? echo get_permalink( $post->ID ); ?>" >
					<?
     echo $post->post_title;
		?>
						</a></li>	
						<?
    }
    wp_reset_postdata();
	?>
					</ol>
					<?
}
					
					 do_action('a4h_hook_entry_content_end'); ?>
					<?php do_action('a4h_hook_entry_content_end'); ?>
				</div>
				<?php do_action('a4h_hook_entry_content_after'); ?>
			</div>
			<?php a4h_link_pages(); ?>
			<?php a4h_post_sharing_buttons('bottom'); ?>
			<?php a4h_post_tags(); ?>
			<?php do_action('a4h_hook_ad_location_post_end'); ?>
		</div>
	</div>
</section>