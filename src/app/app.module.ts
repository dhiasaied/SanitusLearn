import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DropdownMenuComponent } from './shared/dropdown-menu/dropdown-menu.component';
import { HelpIconComponent } from './shared/help-icon/help-icon.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { IndexComponent } from './pages/index/index.component';
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
import { M1Cat1AssimilationQuestionnaireTopic1Component } from './pages/m1-cat1-assimilation-questionnaire-topic-1/m1-cat1-assimilation-questionnaire-topic-1.component';
import { M1Cat1AssimilationQuestionnaireTopic2Component } from './pages/m1-cat1-assimilation-questionnaire-topic-2/m1-cat1-assimilation-questionnaire-topic-2.component';
import { M1Cat1AssimilationQuestionnaireTopic3Component } from './pages/m1-cat1-assimilation-questionnaire-topic-3/m1-cat1-assimilation-questionnaire-topic-3.component';
import { M1Cat1AssimilationQuestionnaireTopic4Component } from './pages/m1-cat1-assimilation-questionnaire-topic-4/m1-cat1-assimilation-questionnaire-topic-4.component';
import { M1c1PartialEvaluationQuestionnaireTopic1Component } from './pages/m1c1-partial-evaluation-questionnaire-topic-1/m1c1-partial-evaluation-questionnaire-topic-1.component';
import { M1c1PartialEvaluationQuestionnaireTopic2Component } from './pages/m1c1-partial-evaluation-questionnaire-topic-2/m1c1-partial-evaluation-questionnaire-topic-2.component';
import { M1c1PartialEvaluationQuestionnaireTopic3Component } from './pages/m1c1-partial-evaluation-questionnaire-topic-3/m1c1-partial-evaluation-questionnaire-topic-3.component';
import { M1c1PartialEvaluationQuestionnaireTopic4Component } from './pages/m1c1-partial-evaluation-questionnaire-topic-4/m1c1-partial-evaluation-questionnaire-topic-4.component';
import { Mf1Component } from './pages/mf1/mf1.component';
import { Mf1Tema2Parte1Component } from './pages/mf1-tema2-parte1/mf1-tema2-parte1.component';
import { Mf1Tema2Parte2Component } from './pages/mf1-tema2-parte2/mf1-tema2-parte2.component';
import { VideosComponent } from './pages/videos/videos.component';
import { Videos1Component } from './pages/videos-1/videos-1.component';
import { Videos3Component } from './pages/videos-3/videos-3.component';
import { Videos4Component } from './pages/videos-4/videos-4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidebarComponent,
    DropdownMenuComponent,
    HelpIconComponent,
    ConnexionComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    IndexComponent,
    CoursesComponent,
    CourseViewComponent,
    CourseView2Component,
    ContactComponent,
    FaqComponent,
    FilesComponent,
    GradesComponent,
    PreferencesComponent,
    ReportsComponent,
    CalendarComponent,
    ChatComponent,
    NotificationsComponent,
    SupportComponent,
    ProfileComponent,
    ForumsComponent,
    IntroductionForumComponent,
    QuestionsGeneralDoubtsComponent,
    CafeteriaComponent,
    Module1IndexComponent,
    Module2IndexComponent,
    Module3IndexComponent,
    Module4IndexComponent,
    Module5IndexComponent,
    M1Cat1AssimilationQuestionnaireTopic1Component,
    M1Cat1AssimilationQuestionnaireTopic2Component,
    M1Cat1AssimilationQuestionnaireTopic3Component,
    M1Cat1AssimilationQuestionnaireTopic4Component,
    M1c1PartialEvaluationQuestionnaireTopic1Component,
    M1c1PartialEvaluationQuestionnaireTopic2Component,
    M1c1PartialEvaluationQuestionnaireTopic3Component,
    M1c1PartialEvaluationQuestionnaireTopic4Component,
    Mf1Component,
    Mf1Tema2Parte1Component,
    Mf1Tema2Parte2Component,
    VideosComponent,
    Videos1Component,
    Videos3Component,
    Videos4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
