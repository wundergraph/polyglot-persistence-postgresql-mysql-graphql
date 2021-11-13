

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}
