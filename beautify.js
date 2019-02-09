javascript: switch (location.host) {
	case 'news.ycombinator.com':
		location.href = 'https://hn.premii.com/#/comments/'.concat(location.href.match(/id=(\d+)/)[1]);
		break;
	case 'www.reddit.com':
		location.href = 'https://reddit.premii.com/#/r/'.concat(location.href.match(/\/r\/(.+\/comments\/.+\/).*/)[1]);
		break;
	default:
		location.href = "https://www.instapaper.com/text?u=" + encodeURIComponent(location.href);
		break;
}
