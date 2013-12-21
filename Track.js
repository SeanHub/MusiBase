function Track(artist, image, source, title) {
	var artist = artist || "unknown",
		image = image || "",
		source = source || "",
		title = title || "unknown";

	return { artist:artist, image:image, source:source, title:title };
}