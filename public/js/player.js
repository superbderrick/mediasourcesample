var player = function(video) 
{
	player.mediaSource = null;
	player.sourceBuffer = null;
	player.mimeCodec = null;
	player.video = null;

	player.segmentLength = 0;
	player.segmentDuration = 0;
    player.bytesFetched = 0;
    player.requestedSegments = [];
    player.totalSegments = 5;

    player.init = function  () {
    		console.log('test');
    }

}

module.exports = player;