export interface AddMessageInput {
	message: string;
}

export interface InternalAddMessageInput {
	email: string;
	name: string;
	message: string;
}

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export interface AddMessageResponse {
	data?: {
		createOnemessages?: {
			id: number;
			message: string;
		};
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface MessagesResponse {
	data?: {
		findManymessages: {
			id: number;
			message: string;
			users: {
				id: number;
				name: string;
			};
		}[];
	};
	errors?: ReadonlyArray<GraphQLError>;
}
