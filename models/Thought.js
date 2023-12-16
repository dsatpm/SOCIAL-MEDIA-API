const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			validate: [
				({ length }) => length <= 280,
				'Thought must be less than 280 characters.',
			],
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (createdAtVal) => dateFormat(createdAtVal),
		},
		username: {
			type: String,
			required: true,
		},
		reactions: [reactionSchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
		},
		reactionBody: {
			type: String,
			required: true,
			validate: [
				({ length }) => length <= 280,
				'Reaction must be less than 280 characters.',
			],
		},
		username: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (createdAtVal) => dateFormat(createdAtVal),
		},
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

thoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
