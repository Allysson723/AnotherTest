import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UserAccount = React.lazy(() => import("pages/UserAccount"));
const SMS = React.lazy(() => import("pages/SMS"));
const SlideshowCreator = React.lazy(() => import("pages/SlideshowCreator"));
const Onlinebackup = React.lazy(() => import("pages/Onlinebackup"));
const MuteUnmuteChat = React.lazy(() => import("pages/MuteUnmuteChat"));
const WordpressExport = React.lazy(() => import("pages/WordpressExport"));
const Wordlookup = React.lazy(() => import("pages/Wordlookup"));
const Watermark = React.lazy(() => import("pages/Watermark"));
const KarmaPoints = React.lazy(() => import("pages/KarmaPoints"));
const Translation = React.lazy(() => import("pages/Translation"));
const Trash = React.lazy(() => import("pages/Trash"));
const Testimonials = React.lazy(() => import("pages/Testimonials"));
const Spellcheck = React.lazy(() => import("pages/Spellcheck"));
const Hashtags = React.lazy(() => import("pages/Hashtags"));
const SaveasPDF = React.lazy(() => import("pages/SaveasPDF"));
const ReaderMode = React.lazy(() => import("pages/ReaderMode"));
const Groups = React.lazy(() => import("pages/Groups"));
const PdfEdit = React.lazy(() => import("pages/PdfEdit"));
const PDFConvert = React.lazy(() => import("pages/PDFConvert"));
const GroupChat = React.lazy(() => import("pages/GroupChat"));
const PaidContent = React.lazy(() => import("pages/PaidContent"));
const Pagination = React.lazy(() => import("pages/Pagination"));
const Notes = React.lazy(() => import("pages/Notes"));
const Followers = React.lazy(() => import("pages/Followers"));
const MultiSelect = React.lazy(() => import("pages/MultiSelect"));
const ManageBlogComments = React.lazy(() => import("pages/ManageBlogComments"));
const Library = React.lazy(() => import("pages/Library"));
const JobListing = React.lazy(() => import("pages/JobListing"));
const InteractiveFAQs = React.lazy(() => import("pages/InteractiveFAQs"));
const ImportPhotoshopDocument = React.lazy(
  () => import("pages/ImportPhotoshopDocument"),
);
const FileAttachment = React.lazy(() => import("pages/FileAttachment"));
const ConversationThreading = React.lazy(
  () => import("pages/ConversationThreading"),
);
const DynamicContent = React.lazy(() => import("pages/DynamicContent"));
const ContactSharing = React.lazy(() => import("pages/ContactSharing"));
const Draganddrop = React.lazy(() => import("pages/Draganddrop"));
const Download = React.lazy(() => import("pages/Download"));
const Documents = React.lazy(() => import("pages/Documents"));
const GoogleAdsenseIntegration = React.lazy(
  () => import("pages/GoogleAdsenseIntegration"),
);
const DocumentOpener = React.lazy(() => import("pages/DocumentOpener"));
const VideoLibrary = React.lazy(() => import("pages/VideoLibrary"));
const BlogImportingOne = React.lazy(() => import("pages/BlogImportingOne"));
const ChatBackupRestore = React.lazy(() => import("pages/ChatBackupRestore"));
const CustomForm = React.lazy(() => import("pages/CustomForm"));
const BroadcastMessage = React.lazy(() => import("pages/BroadcastMessage"));
const ContentManagement = React.lazy(() => import("pages/ContentManagement"));
const AudioVideoMessenger = React.lazy(
  () => import("pages/AudioVideoMessenger"),
);
const UserGroups = React.lazy(() => import("pages/UserGroups"));
const TimesheetManagement = React.lazy(
  () => import("pages/TimesheetManagement"),
);
const CommunityForum = React.lazy(() => import("pages/CommunityForum"));
const AddFriends = React.lazy(() => import("pages/AddFriends"));
const TimeTrackingBilling = React.lazy(
  () => import("pages/TimeTrackingBilling"),
);
const CharacterCount = React.lazy(() => import("pages/CharacterCount"));
const ActivityFeed = React.lazy(() => import("pages/ActivityFeed"));
const SwitchAccount = React.lazy(() => import("pages/SwitchAccount"));
const Playlist = React.lazy(() => import("pages/Playlist"));
const Catalogue = React.lazy(() => import("pages/Catalogue"));
const OrganisationHierarchy = React.lazy(
  () => import("pages/OrganisationHierarchy"),
);
const CallRecording = React.lazy(() => import("pages/CallRecording"));
const BulkUploading = React.lazy(() => import("pages/BulkUploading"));
const Share = React.lazy(() => import("pages/Share"));
const LeadManagement = React.lazy(() => import("pages/LeadManagement"));
const AudioSlideShow = React.lazy(() => import("pages/AudioSlideShow"));
const BlogPostsManagement = React.lazy(
  () => import("pages/BlogPostsManagement"),
);
const FriendList = React.lazy(() => import("pages/FriendList"));
const FromApprovalWorkflow = React.lazy(
  () => import("pages/FromApprovalWorkflow"),
);
const AudioLibrary = React.lazy(() => import("pages/AudioLibrary"));
const BlogImporting = React.lazy(() => import("pages/BlogImporting"));
const ImageManagement = React.lazy(() => import("pages/ImageManagement"));
const DemoAccount = React.lazy(() => import("pages/DemoAccount"));
const AutomatedPublishing = React.lazy(
  () => import("pages/AutomatedPublishing"),
);
const Emaillogin = React.lazy(() => import("pages/Emaillogin"));
const CVResumeCandidateManagement = React.lazy(
  () => import("pages/CVResumeCandidateManagement"),
);
const AudioCall = React.lazy(() => import("pages/AudioCall"));
const AuditTrail = React.lazy(() => import("pages/AuditTrail"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const CertificationTracking = React.lazy(
  () => import("pages/CertificationTracking"),
);
const AudioMusic = React.lazy(() => import("pages/AudioMusic"));
const AgeRestriction = React.lazy(() => import("pages/AgeRestriction"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/agerestriction" element={<AgeRestriction />} />
          <Route path="/audiomusic" element={<AudioMusic />} />
          <Route
            path="/certificationtracking"
            element={<CertificationTracking />}
          />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/audittrail" element={<AuditTrail />} />
          <Route path="/audiocall" element={<AudioCall />} />
          <Route
            path="/cvresumecandidatemanagement"
            element={<CVResumeCandidateManagement />}
          />
          <Route path="/emaillogin" element={<Emaillogin />} />
          <Route
            path="/automatedpublishing"
            element={<AutomatedPublishing />}
          />
          <Route path="/demoaccount" element={<DemoAccount />} />
          <Route path="/imagemanagement" element={<ImageManagement />} />
          <Route path="/blogimporting" element={<BlogImporting />} />
          <Route path="/audiolibrary" element={<AudioLibrary />} />
          <Route
            path="/fromapprovalworkflow"
            element={<FromApprovalWorkflow />}
          />
          <Route path="/friendlist" element={<FriendList />} />
          <Route
            path="/blogpostsmanagement"
            element={<BlogPostsManagement />}
          />
          <Route path="/audioslideshow" element={<AudioSlideShow />} />
          <Route path="/leadmanagement" element={<LeadManagement />} />
          <Route path="/share" element={<Share />} />
          <Route path="/bulkuploading" element={<BulkUploading />} />
          <Route path="/callrecording" element={<CallRecording />} />
          <Route
            path="/organisationhierarchy"
            element={<OrganisationHierarchy />}
          />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/switchaccount" element={<SwitchAccount />} />
          <Route path="/activityfeed" element={<ActivityFeed />} />
          <Route path="/charactercount" element={<CharacterCount />} />
          <Route
            path="/timetrackingbilling"
            element={<TimeTrackingBilling />}
          />
          <Route path="/addfriends" element={<AddFriends />} />
          <Route path="/communityforum" element={<CommunityForum />} />
          <Route
            path="/timesheetmanagement"
            element={<TimesheetManagement />}
          />
          <Route path="/usergroups" element={<UserGroups />} />
          <Route
            path="/audiovideomessenger"
            element={<AudioVideoMessenger />}
          />
          <Route path="/contentmanagement" element={<ContentManagement />} />
          <Route path="/broadcastmessage" element={<BroadcastMessage />} />
          <Route path="/customform" element={<CustomForm />} />
          <Route path="/chatbackuprestore" element={<ChatBackupRestore />} />
          <Route path="/blogimportingone" element={<BlogImportingOne />} />
          <Route path="/videolibrary" element={<VideoLibrary />} />
          <Route path="/documentopener" element={<DocumentOpener />} />
          <Route
            path="/googleadsenseintegration"
            element={<GoogleAdsenseIntegration />}
          />
          <Route path="/documents" element={<Documents />} />
          <Route path="/download" element={<Download />} />
          <Route path="/draganddrop" element={<Draganddrop />} />
          <Route path="/contactsharing" element={<ContactSharing />} />
          <Route path="/dynamiccontent" element={<DynamicContent />} />
          <Route
            path="/conversationthreading"
            element={<ConversationThreading />}
          />
          <Route path="/fileattachment" element={<FileAttachment />} />
          <Route
            path="/importphotoshopdocument"
            element={<ImportPhotoshopDocument />}
          />
          <Route path="/interactivefaqs" element={<InteractiveFAQs />} />
          <Route path="/joblisting" element={<JobListing />} />
          <Route path="/library" element={<Library />} />
          <Route path="/manageblogcomments" element={<ManageBlogComments />} />
          <Route path="/multiselect" element={<MultiSelect />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/paidcontent" element={<PaidContent />} />
          <Route path="/groupchat" element={<GroupChat />} />
          <Route path="/pdfconvert" element={<PDFConvert />} />
          <Route path="/pdfedit" element={<PdfEdit />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/readermode" element={<ReaderMode />} />
          <Route path="/saveaspdf" element={<SaveasPDF />} />
          <Route path="/hashtags" element={<Hashtags />} />
          <Route path="/spellcheck" element={<Spellcheck />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/karmapoints" element={<KarmaPoints />} />
          <Route path="/watermark" element={<Watermark />} />
          <Route path="/wordlookup" element={<Wordlookup />} />
          <Route path="/wordpressexport" element={<WordpressExport />} />
          <Route path="/muteunmutechat" element={<MuteUnmuteChat />} />
          <Route path="/onlinebackup" element={<Onlinebackup />} />
          <Route path="/slideshowcreator" element={<SlideshowCreator />} />
          <Route path="/sms" element={<SMS />} />
          <Route path="/useraccount" element={<UserAccount />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
