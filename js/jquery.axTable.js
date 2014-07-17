/*
 * jQuery Plugin: jQuery AX Table for responsive tables
 * Version 1.0.0
 *
 * Copyright (c) 2014 Mahmoud Ilyan
 * Licensed jointly under the GPL and MIT licenses,
 * choose which one suits your project best!
 *
 */

;(function ($,window,document, undefined){


	$.fn.axTable = function (options){
		var tableTitles = [],
			style = '',
			tableID,
			
		// Overrideing Default Options
		options = $.extend({}, $.fn.axTable.options,options);		

		return this.each( function(index){
			var self = $(this),
				tableID = ( self.attr('id') === undefined )
					? self.attr('id', 'axTable' + ( index + 1)  ).attr('id')
					: self.attr('id');
			
			// Get Table Header Titles and Add Class axTable;
			self.addClass("axTable").find('tr th').each(function(){
				tableTitles.push($(this).attr('data-axTable-title'));
			});
			
			for(var i = 0; i < tableTitles.length; i++){
				style += '#' + tableID + ' td:nth-of-type(' + (i + 1) + '):before { content: "' + tableTitles[i] + '"; }';
			}

			if ( $('#axTableStyle').length ){
				$('#axTableStyle').append(style); 
			} else {
				$('<style id="axTableStyle">' + style + '</style>').appendTo("head");
			}

			tableTitles = [];


		});
	};

	// axTable Options
	// @TODO Add More Options
	$.fn.axTable.options = {

	};

})(jQuery,window,document);