/**
 * display the result of form's submit to modal window.
 *
 * This is the jquery plugin that displays the submitted page to modal window.
 * It is required a stylesheet of modal window.
 *
 * You may use this under the terms of either MIT License or
 * GNU General Public License (GPL) Version 2. (same as jQuery).
 *
 * Copyright (c) MIYAGINO.net. All Rights Reserved.
 */
(function($) {
	$.fn.modalsubmit = function(opts) {
		var default_opts = {
			left: 30,
			top: 30,
			padding: 10,
			duration: 1000,
			formname: 'modalsubmit',
			submitfn: null,
			domodal: true,
			closed: '[closed]'
		};

		opts = $.extend(default_opts, opts || {});

		var isIE = !$.support.opacity;			/* useless */
		var isIE6 = isIE && !window.XMLHttpRequest;	/* useless */

		var previewoverlay = '<div id="previewoverlay"></div>' +
			'<div id="previewmodal">' +
			'<p id="previewclose">' + opts.closed + '</p>' +
			'<iframe name="previewdisplay" frameborder="0"></iframe>' +
			'</div>';
		var close_modal = function() {
			$('#previewmodal').hide();
			$('#previewoverlay').hide();
			$('#previewmodal').remove();
			$('#previewoverlay').remove();
		}
		var submit_func = function() {
			if (opts.submitfn == null) {
				$('form[name="' + opts.formname + '"]').
					get(0).submit();
			} else {
				opts.submitfn();
			}
		}

		return this.click(function(i) {
			if (!opts.domodal) {
				submit_func();
				return;
			}

			var msH = $(document).height();
			var msW = $(document).width();
			var msT = $(document).scrollTop();

			$('body').prepend(previewoverlay);

			$('#previewoverlay').animate({
				opacity: 0.7,
				width: msW,
				height: msH
			}, 100).fadeIn(opts.duration);

			$('#previewmodal').css({
				left: opts.left,
				top: opts.top + msT,
				padding: opts.padding,
				width: msW - (opts.left + opts.padding) * 2,
				height: msH - msT - (opts.top + opts.padding) * 2
			}).fadeIn(opts.duration);

			/* set iframe.name to form.target */
			$('form[name="' + opts.formname + '"]').
				attr('target', 'previewdisplay');
			submit_func();

			$(document).keydown(function(e) {
				if (e.keyCode === 27 ||
						e.keyCode === 81) { /* ESC,q */
					close_modal();
				}
			});
			$('#previewoverlay').click(function() {
				close_modal();
			});
			$('#previewclose').click(function() {
				close_modal();
			});
		});
	}
})(jQuery);
