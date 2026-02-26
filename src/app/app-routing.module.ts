import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseViewComponent } from './pages/course-view/course-view.component';
import { CourseView2Component } from './pages/course-view-2/course-view-2.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FilesComponent } from './pages/files/files.component';
import { GradesComponent } from './pages/grades/grades.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SupportComponent } from './pages/support/support.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ForumsComponent } from './pages/forums/forums.component';
import { IntroductionForumComponent } from './pages/introduction-forum/introduction-forum.component';
import { QuestionsGeneralDoubtsComponent } from './pages/questions-general-doubts/questions-general-doubts.component';
import { CafeteriaComponent } from './pages/cafeteria/cafeteria.component';
import { Module1IndexComponent } from './pages/module1-index/module1-index.component';
import { Module2IndexComponent } from './pages/module2-index/module2-index.component';
import { Module3IndexComponent } from './pages/module3-index/module3-index.component';
import { Module4IndexComponent } from './pages/module4-index/module4-index.component';
import { Module5IndexComponent } from './pages/module5-index/module5-index.component';
import { VideosComponent } from './pages/videos/videos.component';
import { Videos1Component } from './pages/videos-1/videos-1.component';
import { Videos3Component } from './pages/videos-3/videos-3.component';
import { Videos4Component } from './pages/videos-4/videos-4.component';
import { Mf1Component } from './pages/mf1/mf1.component';
import { Mf1Tema2Parte1Component } from './pages/mf1-tema2-parte1/mf1-tema2-parte1.component';
import { Mf1Tema2Parte2Component } from './pages/mf1-tema2-parte2/mf1-tema2-parte2.component';
import { M1Cat1AssimilationQuestionnaireTopic1Component } from './pages/m1-cat1-assimilation-questionnaire-topic-1/m1-cat1-assimilation-questionnaire-topic-1.component';
import { M1Cat1AssimilationQuestionnaireTopic2Component } from './pages/m1-cat1-assimilation-questionnaire-topic-2/m1-cat1-assimilation-questionnaire-topic-2.component';
import { M1Cat1AssimilationQuestionnaireTopic3Component } from './pages/m1-cat1-assimilation-questionnaire-topic-3/m1-cat1-assimilation-questionnaire-topic-3.component';
import { M1Cat1AssimilationQuestionnaireTopic4Component } from './pages/m1-cat1-assimilation-questionnaire-topic-4/m1-cat1-assimilation-questionnaire-topic-4.component';
import { M1c1PartialEvaluationQuestionnaireTopic1Component } from './pages/m1c1-partial-evaluation-questionnaire-topic-1/m1c1-partial-evaluation-questionnaire-topic-1.component';
import { M1c1PartialEvaluationQuestionnaireTopic2Component } from './pages/m1c1-partial-evaluation-questionnaire-topic-2/m1c1-partial-evaluation-questionnaire-topic-2.component';
import { M1c1PartialEvaluationQuestionnaireTopic3Component } from './pages/m1c1-partial-evaluation-questionnaire-topic-3/m1c1-partial-evaluation-questionnaire-topic-3.component';
import { M1c1PartialEvaluationQuestionnaireTopic4Component } from './pages/m1c1-partial-evaluation-questionnaire-topic-4/m1c1-partial-evaluation-questionnaire-topic-4.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course-view', component: CourseViewComponent },
  { path: 'course-view-2', component: CourseView2Component },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'files', component: FilesComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'forums', component: ForumsComponent },
  { path: 'introduction-forum', component: IntroductionForumComponent },
  { path: 'questions-general-doubts', component: QuestionsGeneralDoubtsComponent },
  { path: 'cafeteria', component: CafeteriaComponent },
  { path: 'module1-index', component: Module1IndexComponent },
  { path: 'module2-index', component: Module2IndexComponent },
  { path: 'module3-index', component: Module3IndexComponent },
  { path: 'module4-index', component: Module4IndexComponent },
  { path: 'module5-index', component: Module5IndexComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'videos-1', component: Videos1Component },
  { path: 'videos-3', component: Videos3Component },
  { path: 'videos-4', component: Videos4Component },
  { path: 'mf1', component: Mf1Component },
  { path: 'mf1-tema2-parte1', component: Mf1Tema2Parte1Component },
  { path: 'mf1-tema2-parte2', component: Mf1Tema2Parte2Component },
  { path: 'm1-cat1-assimilation-questionnaire-topic-1', component: M1Cat1AssimilationQuestionnaireTopic1Component },
  { path: 'm1-cat1-assimilation-questionnaire-topic-2', component: M1Cat1AssimilationQuestionnaireTopic2Component },
  { path: 'm1-cat1-assimilation-questionnaire-topic-3', component: M1Cat1AssimilationQuestionnaireTopic3Component },
  { path: 'm1-cat1-assimilation-questionnaire-topic-4', component: M1Cat1AssimilationQuestionnaireTopic4Component },
  { path: 'm1c1-partial-evaluation-questionnaire-topic-1', component: M1c1PartialEvaluationQuestionnaireTopic1Component },
  { path: 'm1c1-partial-evaluation-questionnaire-topic-2', component: M1c1PartialEvaluationQuestionnaireTopic2Component },
  { path: 'm1c1-partial-evaluation-questionnaire-topic-3', component: M1c1PartialEvaluationQuestionnaireTopic3Component },
  { path: 'm1c1-partial-evaluation-questionnaire-topic-4', component: M1c1PartialEvaluationQuestionnaireTopic4Component },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
