import {
	PAGE_HOME_ACTIVE,
	PAGE_EXAMPLES_ACTIVE,
	PAGE_ABOUT_US_ACTIVE,
	PAGE_PURPOSE_ACTIVE,
} from '../../constants/defaultConstants'


export const scrollHome = () => ({
	type: PAGE_HOME_ACTIVE
});

export const scrollExamples = () => ({
	type: PAGE_EXAMPLES_ACTIVE
});

export const scrollAboutUs = () => ({
	type: PAGE_ABOUT_US_ACTIVE
});

export const scrollPurpose = () => ({
	type: PAGE_PURPOSE_ACTIVE
});
