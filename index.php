<!doctype html>
<html ng-app="descant">
	<head>
		<link rel="stylesheet" href="//rawgit.com/Tel-Aviv/CSS-Framework/master/framework.css">
		<link rel="stylesheet" href="forum.css">
		<script src="angular.min.js"></script>
		<script src="index.js"></script>
	</head>
	<body class="width" ng-controller="forumCtrl as forum">
		<div ng-controller="pageCtrl as page">
			<!--Nav-->
			<div class="nav-tabs" style="margin-bottom: 0;">
				<a ng-class="{ active: page.isPage('topics') }" ng-click="page.setPage('topics')" href>Topics</a>
				<a ng-class="{ active: page.isPage('users') }" ng-click="page.setPage('users')" href>Users</a>
				<a ng-class="{ active: page.isPage('admin') }" ng-click="page.setPage('admin')" href>Admin</a>
				<a ng-class="{ active: page.isPage('chat') }" ng-click="page.setPage('chat')" href>Chat</a>
			</div>
			<!--Pages-->
			<!--Topics Page-->
			<div ng-controller="topicsCtrl as topics" ng-show="page.isPage('topics')">
				<p ng-show="topics.mode == 'list'">
					<button ng-click="topics.toggleNTP()" class="highlight"><i class="fa" ng-class="{ 'fa-minus': topics.showNTP, 'fa-plus': topics.showNTP == false }"></i> New Topic</button>
					<button><i class="fa fa-tags"></i> Tags</button>
				</p>
				<div ng-show="topics.showNTP" class="panel">
					<div class="end">
						New Topic
					</div>
					<div class="body">
						<div class="margin-fix">
							<form>
								<p>
									<input class="full" placeholder="Title">
								</p>
								<p>
									<textarea class="full" placeholder="Post"></textarea>
								</p>
								<p>
									<button class="highlight">Post</button>
									<button ng-click="topics.toggleNTP()">Hide</button>
								</p>
							</form>
						</div>
					</div>
				</div>
				<p>Mode: {{ topics.mode }} ID: {{ topics.id }}</p>
				<ul class="box topics-list">
					<li ng-click="topics.openTopic(topic.id)" ng-repeat="topic in topics.list">
						<div class="topics-avatar"></div>
						<div class="topics-title">{{ topic.title }}</div>
						<div class="topics-stats">{{ topic.author_name }} <span class="topics-time">posted {{ topic.post_date | date }} / {{ topic.reply_count }} replies</span></div>
					</li>
				</ul>
			</div>
			<!--End Topics Page-->
			<!--Start Users Page-->
			<div ng-controller="usersCtrl as users" ng-show="page.isPage('users')">
				<ul class="box users-list">
					<li ng-repeat="user in users.list">
						<div class="users-avatar"></div>
						<div class="users-title">{{ user.username }}</div>
						<div class="users-stats"><span class="users-time">registered null / null posts</span></div>
					</li>
				</ul>
			</div>
			<!--End Users Page-->
			<!--Start Admin Page-->
			<div ng-show="page.isPage('admin')">
				<p>
					<textarea></textarea>
				</p>
			</div>
			<!--End Admin Page-->
			<!--Start Chat Page-->
			<div ng-show="page.isPage('chat')">
				<div class="panel">
					<div class="end">
						<textarea placeholder="Message" rows="1" class="full"></textarea>
					</div>
					<div class="body">
						<p>Aviv: I like pie</p>
						<p>TheTimeKeeper: No</p>
						<p>TheTimeKeeper: I like cake</p>
						<p>Aurora01: Grunty like pie</p>
						<p>TheTimeKeeper: No</p>
					</div>
				</div>
			</div>
			<!--End Chat Page-->
		</div>
	</body>
</html>
