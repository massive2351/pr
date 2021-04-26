// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require popper
//= require bootstrap-sprockets
//= require jquery
//= require moment
//= require fullcalendar
//= require_tree .

$(function () {
    // 画面遷移を検知
    $(document).on('turbolinks:load', function () {
        if ($('#calendar').length) {

            function Calendar() {
                return $('#calendar').fullCalendar({
                });
            }
            function clearCalendar() {
                $('#calendar').html('');
                
            }

            $(document).on('turbolinks:load', function () {
                Calendar();
            });
            $(document).on('turbolinks:before-cache', clearCalendar);

            //events: '/events.json', 以下に追加
            $(document).ready(function() {
            $('#calendar').fullCalendar({
                header: {
                  // fullcalendarのヘッダーに配置するボタン
                  // 左側には「前月、翌月、今日」のボタン
                  // 中央には表示している月
                  // 右側には月表示、週表示、日表示、月予定
                  left: 'prev,next today',
                  center: 'title',
                  right: 'month,agendaWeek,agendaDay'
                },
                
                timeFormat: 'HH:mm', // 時間表示フォーマット
                timezone: 'Asia/Tokyo', // タイムゾーン設定
                eventLimit: true, // イベント増えた時にリンクボタン表示
                editable: true, // 編集可能設定
                slotEventOverlap: true, // イベントの見た目を重ねて表示
                selectable: true, // カレンダー空白部分のドラッグ可能
                selectHelper: true, // これをtrueにすると範囲設定できます
                selectMinDistance: 1 // 説明し難いので別途
            });
          });
        }
    });
});