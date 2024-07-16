const { Schema, Types } = require('mongoose');


const reactionSchema = new Schema(
    {
        reactionId: 
            {
                type: Schema.Types.ObjectId,
                default: () => new Types.ObjectId(),
            },
        
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username:
        {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            timestamp: true,
            default: Date.now,
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

reactionSchema.virtual('formattedDate').get(function () {
    return this.createdAt.toDateString();
}
);





// const reaction= model('reaction', reactionSchema);

module.exports = reactionSchema;