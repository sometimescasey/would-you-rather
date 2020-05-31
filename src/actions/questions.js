export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const VOTE_QUESTION = "VOTE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

/* ACTION CREATOR */
export function receiveQuestions(questions) {
	return (
		{
			type: RECEIVE_QUESTIONS,
			questions,
		}
	);
}

export function voteQuestion(questions) {
	return (
		{
			type: VOTE_QUESTION,
			questions,
		}
	);
}

export function addQuestion(authedUser, new_question) {
	return (
		{
			type: addQuestion,
			new_question,
		}
	);
}