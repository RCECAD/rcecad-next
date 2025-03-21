export type DomainSuccessPayload<T> = {
	success: true;
	data: T;
};

export type DomainFailedPayload = {
	success: false;
	reason: string;
};

export type DomainFeature<Input, Output> = (
	input: Input,
) => Promise<DomainSuccessPayload<Output> | DomainFailedPayload>;
