
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AccordionModule } from "primeng/accordion";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { BadgeModule } from "primeng/badge";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { ChartModule } from "primeng/chart";
import { CheckboxModule } from "primeng/checkbox";
import { ChipModule } from "primeng/chip";
import { ChipsModule } from "primeng/chips";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ColorPickerModule } from "primeng/colorpicker";
import { ContextMenuModule } from "primeng/contextmenu";
import { DataViewModule } from "primeng/dataview";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { FieldsetModule } from "primeng/fieldset";
import { FileUploadModule } from "primeng/fileupload";
import { FullCalendarModule } from "primeng/fullcalendar";
import { GalleriaModule } from "primeng/galleria";
import { InplaceModule } from "primeng/inplace";
import { InputNumberModule } from "primeng/inputnumber";
import { InputMaskModule } from "primeng/inputmask";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { KnobModule } from "primeng/knob";
import { LightboxModule } from "primeng/lightbox";
import { ListboxModule } from "primeng/listbox";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MultiSelectModule } from "primeng/multiselect";
import { OrderListModule } from "primeng/orderlist";
import { OrganizationChartModule } from "primeng/organizationchart";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PaginatorModule } from "primeng/paginator";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
import { PasswordModule } from "primeng/password";
import { PickListModule } from "primeng/picklist";
import { ProgressBarModule } from "primeng/progressbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ScrollTopModule } from "primeng/scrolltop";
import { SelectButtonModule } from "primeng/selectbutton";
import { SidebarModule } from "primeng/sidebar";
import { SkeletonModule } from "primeng/skeleton";
import { SlideMenuModule } from "primeng/slidemenu";
import { SliderModule } from "primeng/slider";
import { SplitButtonModule } from "primeng/splitbutton";
import { SplitterModule } from "primeng/splitter";
import { StepsModule } from "primeng/steps";
import { TabMenuModule } from "primeng/tabmenu";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { TagModule } from "primeng/tag";
import { TerminalModule } from "primeng/terminal";
import { TieredMenuModule } from "primeng/tieredmenu";
import { TimelineModule } from "primeng/timeline";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";
import { TreeModule } from "primeng/tree";
import { TreeTableModule } from "primeng/treetable";
import { VirtualScrollerModule } from "primeng/virtualscroller";
import { AppComponent } from "./app.component";
import { AppCodeModule } from "./app.code.component";
import { AppCrudComponent } from "./pages/app.crud.component";
import { AppCalendarComponent } from "./pages/app.calendar.component";
import { AppTimelineDemoComponent } from "./pages/app.timelinedemo.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { AppErrorComponent } from "./pages/app.error.component";
import { AppAccessdeniedComponent } from "./pages/app.accessdenied.component";
import { AppLoginComponent } from "./pages/app.login.component";
import { FormLayoutDemoComponent } from "./demo/view/formlayoutdemo.component";
import { FloatLabelDemoComponent } from "./demo/view/floatlabeldemo.component";
import { InvalidStateDemoComponent } from "./demo/view/invalidstatedemo.component";
import { InputDemoComponent } from "./demo/view/inputdemo.component";
import { ButtonDemoComponent } from "./demo/view/buttondemo.component";
import { TableDemoComponent } from "./demo/view/tabledemo.component";
import { ListDemoComponent } from "./demo/view/listdemo.component";
import { TreeDemoComponent } from "./demo/view/treedemo.component";
import { PanelsDemoComponent } from "./demo/view/panelsdemo.component";
import { OverlaysDemoComponent } from "./demo/view/overlaysdemo.component";
import { MediaDemoComponent } from "./demo/view/mediademo.component";
import { MenusDemoComponent } from "./demo/view/menusdemo.component";
import { MessagesDemoComponent } from "./demo/view/messagesdemo.component";
import { MiscDemoComponent } from "./demo/view/miscdemo.component";
import { EmptyDemoComponent } from "./demo/view/emptydemo.component";
import { ChartsDemoComponent } from "./demo/view/chartsdemo.component";
import { FileDemoComponent } from "./demo/view/filedemo.component";
import { DashboardDemoComponent } from "./demo/view/dashboarddemo.component";
import { DocumentationComponent } from "./demo/view/documentation.component";
import { DisplayComponent } from "./utilities/display.component";
import { ElevationComponent } from "./utilities/elevation.component";
import { FlexboxComponent } from "./utilities/flexbox.component";
import { GridComponent } from "./utilities/grid.component";
import { IconsComponent } from "./utilities/icons.component";
import { SpacingComponent } from "./utilities/spacing.component";
import { TypographyComponent } from "./utilities/typography.component";
import { TextComponent } from "./utilities/text.component";
import { WidgetsComponent } from "./utilities/widgets.component";

import { CollaborateurMainComponent } from "./view/collaborateur/collaborateur-main/collaborateur-main.component";
import { CollaborateurTopBarComponent } from "./view/collaborateur/collaborateur-top-bar/collaborateur-top-bar.component";
import { CollaborateurRightMenuComponent } from "./view/collaborateur/collaborateur-right-menu/collaborateur-right-menu.component";
import { ConnectionCollaborateurComponent } from "./view/collaborateur/connection-collaborateur/connection-collaborateur.component";
import { SignInCollaborateurComponent } from "./view/collaborateur/connection-collaborateur/sign-in-collaborateur/sign-in-collaborateur.component";
import { SignUpCollaborateurComponent } from "./view/collaborateur/connection-collaborateur/sign-up-collaborateur/sign-up-collaborateur.component";
import { CollaborateurMenuComponent } from "./view/collaborateur/collaborateur-menu/collaborateur-menu.component";
import { CollaborateurDemandeCongeCreateComponent } from "./view/collaborateur/collaborateur-demande-conge/collaborateur-demande-conge-create/collaborateu-demande-conge-create.component";
import { CollaborateurMenuItemComponent } from "./view/collaborateur/collaborateur-menu/collaborateur-menu-item.component";
import { CollaborateurDemandeCongeListComponent } from "./view/collaborateur/collaborateur-demande-conge/collaborateur-demande-conge-list/collaborateur-demande-conge-list.component";
import { CollaborateurDemandeCongeComponent } from "./view/collaborateur/collaborateur-demande-conge/collaborateur-demande-conge.component";
import { ChefEquipeComponent } from "./view/chef-equipe/chef-equipe.component";
import { ChefEquipeMenuComponent } from "./view/chef-equipe/chef-equipe-menu/chef-equipe-menu.component";
import { ChefEquipeMainComponent } from "./view/chef-equipe/chef-equipe-main/chef-equipe-main.component";

import { ChefEquipeTopBarComponent } from "./view/chef-equipe/chef-equipe-top-bar/chef-equipe-top-bar.component";
import { ChefEquipeRightMenuComponent } from "./view/chef-equipe/chef-equipe-right-menu/chef-equipe-right-menu.component";
import { ChefEquipeConnectionComponent } from "./view/chef-equipe/chef-equipe-connection/chef-equipe-connection.component";
import { ChefEquipeSignInComponent } from "./view/chef-equipe/chef-equipe-connection/chef-equipe-sign-in/chef-equipe-sign-in.component";
import { ChefEquipeSignUpComponent } from "./view/chef-equipe/chef-equipe-connection/chef-equipe-sign-up/chef-equipe-sign-up.component";
import { ChefEquipeMenuItemComponent } from "./view/chef-equipe/chef-equipe-menu/chef-equipe-menu-item/chef-equipe-menu-item.component";
import { CollaborateurDemandeCongeViewComponent } from "./view/collaborateur/collaborateur-demande-conge/collaborateur-demande-conge-view/collaborateur-demande-conge-view.component";

import { CustomerService } from "./demo/service/customerservice";
import { PhotoService } from "./demo/service/photoservice";
import { ProductService } from "./demo/service/productservice";
import { IconService } from "./demo/service/iconservice";
import { CommandeCreateComponent } from "./view/admin/commandes/commande-create/commande-create.component";
import { CommandesComponent } from "./view/admin/commandes/commandes.component";
import { CommandeListComponent } from "./view/admin/commandes/commande-list/commande-list.component";
import { InterventionEditComponent } from "./view/admin/commandes/commande-edit/commande-edit.component";
import { CommandeViewComponent } from "./view/admin/commandes/commande-view/commande-view.component";
import { InterventionInfoComponent } from "./view/admin/commandes/intervention-info/intervention-info.component";
import { InterventionStockComponent } from "./view/admin/commandes/intervention-stock/intervention-stock.component";
import { EquipesComponent } from "./view/admin/equipes/equipes.component";
import { EquipeCreateComponent } from "./view/admin/equipes/equipe-create/equipe-create.component";
import { EquipeListComponent } from "./view/admin/equipes/equipe-list/equipe-list.component";
import { EquipeEditComponent } from "./view/admin/equipes/equipe-edit/equipe-edit.component";
import { EquipeViewComponent } from "./view/admin/equipes/equipe-view/equipe-view.component";
import { InterventionMembreEquipComponent } from "./view/admin/commandes/intervention-membre-equip/intervention-membre-equip.component";
import { InterventionConseilComponent } from "./view/admin/commandes/intervention-conseil/intervention-conseil.component";
import { StockComponent } from "./view/admin/stock/stock.component";
import { OperationStockCreateComponent } from "./view/admin/operationStock/operationStock-create/operationStock-create.component";
import { OperationStockListComponent } from "./view/admin/operationStock/operation-stock-list/operation-stock-list.component";
import { OperationStockEditComponent } from "./view/admin/operationStock/operationStock-edit/operationStock-edit.component";
import { OperationStockViewComponent } from "./view/admin/operationStock/operationStock-view/operationStock-view.component";
import { OperationStockComponent } from "./view/admin/operationStock/operationStock.component";
import { SignInComponent } from "./view/admin/connection/sign-in/sign-in.component";
import { SignUpComponent } from "./view/admin/connection/sign-up/sign-up.component";
import { AdminMenuComponent } from "./view/admin/admin-menu/admin-menu.component";
import { AdminRightMenuComponent } from "./view/admin/admin-right-menu/admin-right-menu.component";
import { AdminTopBarComponent } from "./view/admin/admin-top-bar/admin-top-bar.component";
import { AdminMainComponent } from "./view/admin/admin-main/admin-main.component";
import { HomeComponent } from "./view/home/home.component";
import { HomePageComponent } from "./view/home/home-page/home-page.component";
import { MenuService } from "./controller/service/app.menu.service";
import { AppMenuitemComponent } from "./view/admin/admin-menu/app.menuitem.component";
import { CollaborateurComponent } from "./view/collaborateur/collaborateur.component";
import { CountryService } from "./demo/service/countryservice";
import { EventService } from "./demo/service/eventservice";
import { NodeService } from "./demo/service/nodeservice";
import { CollaborateurListComponent } from "./view/collaborateur/collaborateur-list/collaborateur-list.component";
import { CollaborateurCreateComponent } from "./view/collaborateur/collaborateur-create/collaborateur-create.component";
import { SearchInterventionComponent } from "./view/admin/commandes/search-intervention/search-intervention.component";
import { MembreEquipeComponent } from "./view/admin/equipes/membre-equipe/membre-equipe.component";
import { DemandeCongeCreateComponent } from "./view/chef-equipe/chef-equipe-demandeConge/demande-conge-create/demande-conge-create.component";
import { DemandeCongeListComponent } from "./view/chef-equipe/chef-equipe-demandeConge/demande-conge-list/demande-conge-list.component";
import { ChefTacheComponent } from "./view/chef-equipe/chef-tache/chef-tache.component";
import { ChefEquipeTacheCreateComponent } from "./view/chef-equipe/chef-tache/chef-equipe-tache-create/chef-equipe-tache-create.component";
import { ChefEquipeTacheListComponent } from "./view/chef-equipe/chef-tache/chef-equipe-tache-list/chef-equipe-tache-list.component";
import { ChefSuiviComponent } from './view/chef-equipe/chef-suivi/chef-suivi.component';
import { SuiviListComponent } from './view/chef-equipe/chef-suivi/suivi-list/suivi-list.component';
import {ListComponent} from './view/admin/stock-jdid/list/list.component';
import {CreateComponent} from './view/admin/stock-jdid/create/create.component';
import {StockJdidComponent} from './view/admin/stock-jdid/stock-jdid.component';
import { AdmincollaborateurComponent } from './view/admin/admincollaborateur/admincollaborateur.component';
import { DashbordComponent } from './view/collaborateur/dashbord/dashbord.component';
import { DashboardComponent } from './view/chef-equipe/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './view/forgot-password/forgot-password.component';
import { StockEditComponent } from './view/admin/stock-jdid/stock-edit/stock-edit.component';
import { StockViewComponent } from './view/admin/stock-jdid/stock-view/stock-view.component';
import { DemandeCongeViewComponent } from './view/chef-equipe/chef-equipe-demandeConge/demande-conge-view/demande-conge-view.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppCodeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    AutoCompleteModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipModule,
    ChipsModule,
    CodeHighlighterModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ColorPickerModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    FullCalendarModule,
    GalleriaModule,
    InplaceModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    KnobModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    RippleModule,
    ScrollPanelModule,
    ScrollTopModule,
    SelectButtonModule,
    SidebarModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SplitButtonModule,
    SplitterModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TagModule,
    TerminalModule,
    TimelineModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    VirtualScrollerModule,
  ],
  declarations: [
    AppComponent,
    AppMenuitemComponent,
    DashboardDemoComponent,
    FormLayoutDemoComponent,
    FloatLabelDemoComponent,
    InvalidStateDemoComponent,
    InputDemoComponent,
    ButtonDemoComponent,
    TableDemoComponent,
    ListDemoComponent,
    TreeDemoComponent,
    PanelsDemoComponent,
    OverlaysDemoComponent,
    MediaDemoComponent,
    MenusDemoComponent,
    MessagesDemoComponent,
    MessagesDemoComponent,
    MiscDemoComponent,
    ChartsDemoComponent,
    EmptyDemoComponent,
    FileDemoComponent,
    DocumentationComponent,
    DisplayComponent,
    ElevationComponent,
    FlexboxComponent,
    GridComponent,
    IconsComponent,
    SpacingComponent,
    TypographyComponent,
    TextComponent,
    AppCrudComponent,
    AppCalendarComponent,
    AppTimelineDemoComponent,
    WidgetsComponent,
    AppNotfoundComponent,
    AppErrorComponent,
    AppAccessdeniedComponent,
    AppLoginComponent,
    CommandeCreateComponent,
    CommandesComponent,
    CommandeListComponent,
    InterventionEditComponent,
    CommandeViewComponent,
    InterventionInfoComponent,
    InterventionStockComponent,
    EquipesComponent,
    EquipeCreateComponent,
    EquipeListComponent,
    EquipeEditComponent,
    EquipeViewComponent,
    InterventionMembreEquipComponent,
    InterventionConseilComponent,
    StockComponent,
    OperationStockListComponent,
    OperationStockCreateComponent,
    OperationStockEditComponent,
    OperationStockViewComponent,
    OperationStockComponent,
    SignInComponent,
    SignUpComponent,
    AdminMenuComponent,
    AdminRightMenuComponent,
    AdminTopBarComponent,
    AdminMainComponent,
    CollaborateurDemandeCongeViewComponent,
    HomeComponent,
    HomePageComponent,
    AppMenuitemComponent,
    CollaborateurMenuComponent,
    CollaborateurComponent,
    CollaborateurMainComponent,
    CollaborateurTopBarComponent,
    CollaborateurRightMenuComponent,
    CollaborateurMenuComponent,
    ConnectionCollaborateurComponent,
    CollaborateurDemandeCongeCreateComponent,
    SignUpCollaborateurComponent,
    CollaborateurMenuItemComponent,
    CollaborateurDemandeCongeListComponent,
    CollaborateurDemandeCongeComponent,
    SignInCollaborateurComponent,
    ChefEquipeComponent,
    ChefEquipeMenuComponent,
    ChefEquipeMainComponent,
    ChefEquipeTopBarComponent,
    ChefEquipeRightMenuComponent,
    ChefEquipeConnectionComponent,
    ChefEquipeSignInComponent,
    ChefEquipeSignUpComponent,
    ChefEquipeMenuItemComponent,
    CollaborateurListComponent,
    CollaborateurCreateComponent,
    MembreEquipeComponent,
    DemandeCongeListComponent,
    DemandeCongeCreateComponent,
    ChefTacheComponent,
    SearchInterventionComponent,
    ChefEquipeTacheCreateComponent,
    ChefEquipeTacheListComponent,
    ChefSuiviComponent,
    SuiviListComponent,
    ListComponent,
    CreateComponent,
    StockJdidComponent,
    CollaborateurComponent,
    AdmincollaborateurComponent,
    DashbordComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    StockEditComponent,
    StockViewComponent,
    DemandeCongeViewComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CountryService,
    CustomerService,
    EventService,
    IconService,
    NodeService,
    PhotoService,
    ProductService,
    MenuService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
