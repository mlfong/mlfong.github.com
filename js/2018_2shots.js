
  YUI().use(
  'aui-scheduler',
  function(Y) {
    // functions
    function memberEventContent(memberName, imageSourceUrl) {
      var width = 192/2;
      var height = 240/2;
      return memberName + ' <img src="' + imageSourceUrl + 
             '" width=' + width + ' height=' + height + ' />';
    }
    function llBBEventContent(memberName, imageSourceUrl) {
      var width = 120;
      var height = 120;
      return memberName + ' <img src="' + imageSourceUrl + 
             '" width=' + width + ' height=' + height + ' />';
    }

    var events = [
      {
        content: memberEventContent('Ogino Yuka', 'http://stage48.net/wiki/images/5/5b/OginoYukaNIII2017.jpg'),
        disabled: true,
        meeting: true,
        reminder: true,
        startDate: new Date(2018, 05, 09, 09, 00),
        endDate:   new Date(2018, 05, 09, 09, 30)
      },
      {
        content: memberEventContent('Nakai Rika', 'http://stage48.net/wiki/images/1/1b/NakaiRikaNIII2017.jpg'),
        startDate: new Date(2018, 05, 09, 09, 30),
        endDate:   new Date(2018, 05, 09, 10, 00)
      },
      {
        content: memberEventContent('Yamaguchi Maho', 'http://stage48.net/wiki/images/3/34/YamaguchiMahoNIII2017.jpg'),
        startDate: new Date(2018, 05, 09, 10, 00),
        endDate:   new Date(2018, 05, 09, 10, 30)
      },
      // slot 2
      {
        content: memberEventContent('Oguni Yui', 'http://stage48.net/wiki/images/6/6e/OguriYui8July2017.jpg'),
        startDate: new Date(2018, 05, 09, 10, 30),
        endDate:   new Date(2018, 05, 09, 11, 00)
      },
      {
        content: memberEventContent('Takahashi Juri', 'http://stage48.net/wiki/images/4/4b/TakahashiJuri42017.jpg'),
        startDate: new Date(2018, 05, 09, 11, 00),
        endDate:   new Date(2018, 05, 09, 11, 30)
      },
      {
        content: memberEventContent('Murayama Yuiri', 'http://stage48.net/wiki/images/5/57/MurayamaYuiri42017.jpg'),
        startDate: new Date(2018, 05, 09, 11, 30),
        endDate:   new Date(2018, 05, 09, 12, 00)
      },
      // nothing in slot 3
      {
        content: 'Lunch break',
        startDate: new Date(2018, 05, 09, 12, 00),
        endDate:   new Date(2018, 05, 09, 13, 30)
      },
      // slot 4
      {
        content: memberEventContent('Oba Mina', 'http://stage48.net/wiki/images/2/24/ObaMinaKII2017.jpg'),
        startDate: new Date(2018, 05, 09, 13, 30),
        endDate:   new Date(2018, 05, 09, 14, 00)
      },
      {
        content: memberEventContent('Obata Yuna', 'http://stage48.net/wiki/images/c/cf/ObataYunaKII2017.jpg'),
        startDate: new Date(2018, 05, 09, 14, 00),
        endDate:   new Date(2018, 05, 09, 14, 30)
      },
      // slot 5
      {
        content: memberEventContent('Kodama Haruka', 'http://stage48.net/wiki/images/6/62/KodamaHarukaH6thAnni.jpg'),
        startDate: new Date(2018, 05, 09, 15, 00),
        endDate:   new Date(2018, 05, 09, 15, 30)
      },
      {
        content: memberEventContent('Tanaka Miku', 'http://stage48.net/wiki/images/4/44/TanakaMikuH6thAnni.jpg'),
        startDate: new Date(2018, 05, 09, 15, 30),
        endDate:   new Date(2018, 05, 09, 16, 00)
      },
      {
        content: memberEventContent('Obata Yuna', 'http://stage48.net/wiki/images/c/c2/MatsuokaHanaTII6thAnni.jpg'),
        startDate: new Date(2018, 05, 09, 16, 00),
        endDate:   new Date(2018, 05, 09, 16, 30)
      },
      /////////////////// slot 6
      {
        content: memberEventContent('Furuhata Nao', 'http://stage48.net/wiki/images/4/4e/FuruhataNaoKII2017.jpg'),
        startDate: new Date(2018, 05, 09, 16, 30),
        endDate:   new Date(2018, 05, 09, 17, 00)
      },
      {
        content: memberEventContent('Suda Akari', 'http://stage48.net/wiki/images/8/82/SudaAkariE2017.jpg'),
        startDate: new Date(2018, 05, 09, 17, 00),
        endDate:   new Date(2018, 05, 09, 17, 30)
      },
      // 30 min break
      {
        content: 'Evening break',
        startDate: new Date(2018, 05, 09, 18, 00),
        endDate:   new Date(2018, 05, 09, 18, 30)
      },
      // end 30 break
      {
        content: memberEventContent('Matsui Jurina', 'http://stage48.net/wiki/images/0/02/MatsuiJurinaS2017.jpg'),
        startDate: new Date(2018, 05, 09, 18, 30),
        endDate:   new Date(2018, 05, 09, 19, 00)
      },
      {
        content: memberEventContent('Shibuya Nagisa', 'http://stage48.net/wiki/images/d/d1/ShibuyaNagisaM2017.jpg'),
        startDate: new Date(2018, 05, 09, 19, 00),
        endDate:   new Date(2018, 05, 09, 19, 30)
      },

      {
        content: llBBEventContent('LLBB', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/23755545_10214736526508464_2589220734816954186_n.jpg?oh=6a6a772c26b1ea6a185181559aae0ffd&oe=5AD23B83'),
        startDate: new Date(2018, 05, 09, 19, 30),
        endDate:   new Date(2018, 05, 09, 23, 59),
      },
     

      
      // {
      //   ,
      //   content: 'Earth Day Lunch',
      //   disabled: true,
      //   endDate: new Date(2018, 06, 09, 09, 30),
      //   meeting: true,
      //   reminder: true,
      //   startDate: new Date(2018, 06, 09, 09, 00),
      // },
    ];

    var agendaView = new Y.SchedulerAgendaView();
    var dayView = new Y.SchedulerDayView();
    var weekView = new Y.SchedulerWeekView();
    var monthView = new Y.SchedulerMonthView();

    var eventRecorder = new Y.SchedulerEventRecorder();

    var myViews = [dayView, weekView, monthView, agendaView];
    myViews = [agendaView];

    new Y.Scheduler(
      {
        activeView: agendaView,
        boundingBox: '#myScheduler',
        date: new Date(2018, 05, 09),
        // eventRecorder: eventRecorder
        items: events,
        render: true,
        views: myViews
      }
    );
  }
);
