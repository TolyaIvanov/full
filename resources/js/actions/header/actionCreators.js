import {
	PAGE_HOME_ACTIVE,
	PAGE_EXAMPLES_ACTIVE,
	PAGE_ABOUT_US_ACTIVE,
	PAGE_PURPOSE_ACTIVE,
} from './../../constants/constants'


export function scrollToHome() {
	return {
		type: PAGE_HOME_ACTIVE
	}
}

export function scrollToExamples() {
	return {
		type: PAGE_EXAMPLES_ACTIVE
	}
}

export function scrollToAboutUs() {
	return {
		type: PAGE_ABOUT_US_ACTIVE
	}
}

export function scrollToPurpose() {
	return {
		type: PAGE_PURPOSE_ACTIVE
	}
}
