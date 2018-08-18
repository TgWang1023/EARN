const ContestSchema = new mongoose.Schema({
    message: {type: String, required: [true, 'Message cannot be blank!']},
    
}, {timestamps: true});
mongoose.model('Contest', ContestSchema);
Contest = mongoose.model('Contest');