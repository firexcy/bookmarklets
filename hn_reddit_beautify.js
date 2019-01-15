javascript: switch (location.host) {
	case 'news.ycombinator.com':
		location.href = 'https://hn.premii.com/#/comments/'.concat(location.href.match(/id=(\d+)/)[1]);
		break;
	case 'www.reddit.com':
		location.href = 'https://reddit.premii.com/#/r/'.concat(location.href.match(/\/r\/(.+\/comments\/.+\/).*/)[1]);
		break;
	default:
		break;
}
