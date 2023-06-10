import { Schema, model, models } from 'mongoose';


//WE CALL IT AS A FUNCTION AND PASS IT AS AN OBJECT USING OUR ({})
const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});
//SINCE WE ARE WORKING ON THE BACKEND WE DO THIS
const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;