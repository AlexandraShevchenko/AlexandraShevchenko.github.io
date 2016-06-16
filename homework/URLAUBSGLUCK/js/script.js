$(document).ready(function(){
	arrowBtn = $(document).find('.arrows');

	arrowFunction = function(){
		var thisArrow = this;
		var slideACTIVE = null;
		var slideBOTTOM = null;
		var slideDirection = 0;
		var slideACTIVEn = null;
		var slideBOTTOMn = null;

		thisBlock = $(thisArrow).parents('.step-area');
		slideItems = thisBlock.find('.slideitem');
		var MaxElem = slideItems.length;

		slideACTIVE = $(thisBlock).find('.slideitem_ACTIVE');

		for (var i = 0; i <= MaxElem; i++){
			if(slideItems[i] == slideACTIVE[0]){
				slideACTIVEn = i;
			}
		}

		if ($(thisArrow).hasClass('arrow_left')) {
			slideDirection = -1;
			}
			else{
				if ($(thisArrow).hasClass('arrow_right')) {
					slideDirection = 1;
					};
				}

		slideBOTTOMn = slideACTIVEn + slideDirection;

		if (slideBOTTOMn == MaxElem){slideBOTTOMn = 0;}
		if (slideBOTTOMn < 0){slideBOTTOMn = MaxElem;}

		slideACTIVE = $(slideItems[slideACTIVEn]);
		slideBOTTOM = $(slideItems[slideBOTTOMn]);

		slideBOTTOM.addClass('slideitem_BOTTOM');
		slideACTIVE.addClass('slideitem_FADE');

		window.setTimeout(function(){
			slideBOTTOM.addClass('slideitem_ACTIVE');
			slideBOTTOM.removeClass('slideitem_BOTTOM');
			slideACTIVE.removeClass('slideitem_FADE');
			slideACTIVE.removeClass('slideitem_ACTIVE');
			},700)
	};

	$(arrowBtn).children().click(arrowFunction);

	$('.GRID').masonry({
		itemSelector: '.GRID-ITEM',
		isFitWidth: true,
		percentPosition: true,
		isResizable: true,
		isAnimated: true,
		animationOptions: {
			queue: false,
			duration: 500
		}
	});

});
