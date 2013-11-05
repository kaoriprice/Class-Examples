/**
 * StudentsView
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/grids.html', 'view/SingleGridStudentView', 'view/BaseView', 'model/ClassList'], 
	function(Backbone, _, $, template, SingleGridStudentView, BaseView, ClassList) {
	
	GridStudentsView = BaseView.extend({
		template:_.template(template),
		initialize: function(options) {
			_.bindAll(this, 'render');
			this.collection = ClassList;		
			this.views = [];
			
		},
		render: function() {
			this.$el.html(this.template({}));
			this.$el.fadeOut(0);
			var self = this;
			this.collection.each(function(student) {
				var view = new SingleGridStudentView({	
					model: student
				});
				self.views.push(view);
				self.$('#gridbody').append(view.$el);
			});
		}
	});

	return GridStudentsView;
}

);