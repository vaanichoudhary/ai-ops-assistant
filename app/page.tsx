// import ClientOnly from "@/components/client-only";
// import Image from "next/image";
// import Link from "next/link";
// import { GoToChatButton } from "./page-client";
// import Header from "@/components/header";

// export default function Home() {
//   return (
//     <ClientOnly>
//       {/* ROOT WRAPPER */}
//       <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-100 via-violet-100 to-purple-200">
//         <Header />

//         {/* MAIN CONTENT */}
//         <div className="w-full flex flex-col items-center justify-center gap-3 px-5">
//           {/* HERO */}
//           <div className="flex flex-col items-center gap-2 pt-40 mt-10 text-center">
//             <h1 className="text-7xl font-bold text-neutral-900">
//               docChat
//             </h1>
//             <p className="max-w-2xl text-md text-neutral-700">
//               Get instant answers from your PDF using AI powered chat
//               <br />
//               Upload PDF • Spill the beans in chat • Get answers
//             </p>
//           </div>

//           <GoToChatButton />

//           {/* DEMO IMAGE */}
//           <div className="backdrop-blur-sm bg-white/50 p-3 rounded-md mt-5">
//             <Image
//               src="/demo.webp"
//               alt="demo image of the app"
//               width={700}
//               height={400}
//               className="rounded-md"
//               priority
//             />
//           </div>

//           {/* FEATURES */}
//           <h2 className="font-bold text-4xl text-gray-800 pt-10 mt-20 text-center">
//             Get QUICK information RETRIEVAL from PDFs
//           </h2>

//           <div className="flex flex-col items-center mt-5 mb-20 text-center gap-10 max-w-3xl">
//             <div className="flex flex-col gap-4">
//               <h3 className="text-2xl font-bold text-gray-800">
//                 Upload Your PDF
//               </h3>
//               <p className="text-gray-800">
//                 Simply drag and drop your PDF file and click to upload, and
//                 start using the tool instantly.
//               </p>
//             </div>

//             <div className="flex flex-col gap-4">
//               <h3 className="text-2xl font-bold text-gray-800">
//                 Ask Questions
//               </h3>
//               <p className="text-gray-800">
//                 Get instant summaries, extract information and ask any
//                 questions about your document with AI.
//               </p>
//             </div>
//           </div>
//           <div className="w-1/3 h-1/3 bg-gray-800 rounded-lg m-10 p-5 flex flex-col items-center justify-center">
//            <h1 className="text-3xl text-gray-100">Get Started </h1>
//            <p className="text-sm text-gray-100">Ready to transform your PDFs into valuable insights? Try it now!</p>
//             <GoToChatButton />
//           </div>

//           {/* FOOTER */}
//           <footer className="bg-gray-900 w-screen h-[250px] flex flex-col p-10 md:flex-row text-center text-white">
//             <div className="flex flex-col items-center justify-center gap-2 px-10 w-full md:w-1/3">
//               <h3 className="text-lg font-bold">Connect with me</h3>

//               {/* <Link
//                 href="https://www.linkedin.com/in/vani-khaiwal-917aa1297"
//                 target="_blank"
//                 className="underline"
//               >
//                 LinkedIn
//               </Link> */}

//               <Link
//                 href="https://github.com/vaanichoudhary"
//                 target="_blank"
//                 className="underline"
//               >
//                 GitHub
//               </Link>

//               {/* <Link
//                 href="https://leetcode.com/u/vani_khaiwal/"
//                 target="_blank"
//                 className="underline"
//               >
//                 LeetCode
//               </Link> */}
//             </div>

//             <div className="flex items-center justify-center w-full md:w-2/3">
//               © 2026 docChat
//             </div>
//           </footer>
//         </div>
//       </div>
//     </ClientOnly>
//   );
// }

import ClientOnly from "@/components/client-only";
import Image from "next/image";
import Link from "next/link";
import { GoToChatButton } from "./page-client";
import Header from "@/components/header";

export default function Home() {
  return (
    <ClientOnly>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;1,300;1,400&family=Geist:wght@300;400;500&display=swap');

        .dc-root {
          font-family: 'Geist', sans-serif;
          font-weight: 300;
          background: #faf9f6;
          color: #1a1a1a;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .dc-serif { font-family: 'Fraunces', serif; }

        /* ── blob shapes ── */
        .blob-coral {
          position: absolute;
          width: 480px; height: 480px;
          border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
          background: #ffd4c2;
          opacity: 0.55;
          pointer-events: none;
        }
        .blob-sage {
          position: absolute;
          width: 340px; height: 340px;
          border-radius: 45% 55% 40% 60% / 60% 40% 60% 40%;
          background: #c9e4ca;
          opacity: 0.6;
          pointer-events: none;
        }
        .blob-sky {
          position: absolute;
          width: 260px; height: 260px;
          border-radius: 50% 50% 40% 60% / 45% 55% 45% 55%;
          background: #bde0f5;
          opacity: 0.55;
          pointer-events: none;
        }
        .blob-peach {
          position: absolute;
          width: 200px; height: 200px;
          border-radius: 55% 45% 60% 40% / 50% 50% 50% 50%;
          background: #fde8b0;
          opacity: 0.7;
          pointer-events: none;
        }

        /* ── hero ── */
        .hero-section {
          position: relative;
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px 60px;
          text-align: center;
          overflow: hidden;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #fff;
          border: 1.5px solid #e2ddd6;
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 36px;
          transform: rotate(-1deg);
          box-shadow: 2px 2px 0 #e2ddd6;
        }

        .hero-headline {
          font-size: clamp(3.2rem, 8vw, 6.5rem);
          line-height: 1.0;
          font-weight: 300;
          letter-spacing: -0.03em;
          color: #1a1a1a;
          max-width: 820px;
          position: relative;
          z-index: 2;
        }
        .hero-headline em {
          font-style: italic;
          color: #d4704a;
        }

        .hero-sub {
          margin-top: 24px;
          font-size: 16px;
          line-height: 1.75;
          color: #888;
          max-width: 420px;
          font-weight: 300;
          position: relative;
          z-index: 2;
        }

        .hero-cta {
          margin-top: 44px;
          position: relative;
          z-index: 2;
        }
        .hero-cta button {
          background: #1a1a1a !important;
          color: #faf9f6 !important;
          border: none !important;
          border-radius: 12px !important;
          padding: 14px 36px !important;
          font-size: 14px !important;
          font-weight: 400 !important;
          letter-spacing: 0.04em !important;
          cursor: pointer !important;
          transition: transform 0.2s, box-shadow 0.2s !important;
          box-shadow: 3px 3px 0 #d4704a !important;
          font-family: 'Geist', sans-serif !important;
        }
        .hero-cta button:hover {
          transform: translate(-1px, -1px) !important;
          box-shadow: 4px 4px 0 #d4704a !important;
        }
        .hero-cta button:active {
          transform: translate(1px, 1px) !important;
          box-shadow: 2px 2px 0 #d4704a !important;
        }

        /* ── scroll hint ── */
        .scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: #bbb;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          z-index: 2;
          animation: bob 2s ease-in-out infinite;
        }
        @keyframes bob {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* ── demo frame ── */
        .demo-wrap {
          position: relative;
          z-index: 10;
          max-width: 800px;
          width: calc(100% - 48px);
          margin: 0 auto;
        }
        .demo-inner {
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid #e8e3dc;
          box-shadow:
            6px 6px 0 #e2ddd6,
            0 24px 60px rgba(0,0,0,0.07);
          background: #fff;
        }
        .demo-bar {
          background: #f5f2ee;
          border-bottom: 1px solid #ede8e0;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; }

        /* ── section layout ── */
        .section {
          padding: 80px 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-label::before {
          content: '';
          display: inline-block;
          width: 24px; height: 1.5px;
          background: #ccc;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #1a1a1a;
          max-width: 560px;
        }
        .section-title em { font-style: italic; color: #5b9e6f; }

        /* ── steps ── */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2px;
          margin-top: 56px;
          background: #e8e3dc;
          border: 1.5px solid #e8e3dc;
          border-radius: 20px;
          overflow: hidden;
        }
        .step-card {
          background: #faf9f6;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: background 0.2s;
        }
        .step-card:hover { background: #fff; }
        .step-num {
          font-family: 'Fraunces', serif;
          font-size: 13px;
          color: #ccc;
          font-style: italic;
        }
        .step-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
        }
        .step-title {
          font-size: 16px;
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.3;
        }
        .step-body {
          font-size: 13.5px;
          color: #999;
          line-height: 1.7;
          font-weight: 300;
        }

        /* ── use for ── */
        .use-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 48px;
        }
        @media (max-width: 540px) {
          .use-grid { grid-template-columns: 1fr; }
        }
        .use-card {
          border: 1.5px solid #ede8e0;
          border-radius: 16px;
          padding: 24px;
          background: #fff;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .use-card:hover {
          border-color: #c9e4ca;
          transform: translateY(-2px);
        }
        .use-emoji { font-size: 22px; line-height: 1; }
        .use-title { font-size: 14px; font-weight: 400; color: #1a1a1a; margin-bottom: 4px; }
        .use-desc { font-size: 12.5px; color: #aaa; line-height: 1.6; }

        /* ── CTA strip ── */
        .cta-strip {
          margin: 0 24px 80px;
          border-radius: 24px;
          background: #fff5f0;
          border: 1.5px solid #ffd4c2;
          padding: 64px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-strip-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: #1a1a1a;
          line-height: 1.15;
          position: relative;
          z-index: 2;
        }
        .cta-strip-title em { font-style: italic; color: #d4704a; }
        .cta-strip-sub {
          font-size: 14px;
          color: #aaa;
          margin-top: 12px;
          margin-bottom: 36px;
          font-weight: 300;
          position: relative;
          z-index: 2;
        }
        .cta-strip .hero-cta { margin-top: 0; }

        /* ── footer ── */
        .dc-footer {
          border-top: 1px solid #ede8e0;
          padding: 32px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .footer-brand {
          font-family: 'Fraunces', serif;
          font-size: 18px;
          font-weight: 300;
          font-style: italic;
          color: #1a1a1a;
        }
        .footer-link {
          font-size: 13px;
          color: #aaa;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #1a1a1a; }
        .footer-copy { font-size: 12px; color: #ccc; }

        /* ── entrance ── */
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rise { animation: riseIn 0.7s ease both; }
        .rise-1 { animation-delay: 0.05s; }
        .rise-2 { animation-delay: 0.18s; }
        .rise-3 { animation-delay: 0.30s; }
        .rise-4 { animation-delay: 0.42s; }
        .rise-5 { animation-delay: 0.56s; }

        .thin-line {
          border: none;
          border-top: 1px solid #ede8e0;
          margin: 0 24px;
        }
      `}</style>

      <div className="dc-root">
        <Header />

        {/* ── HERO ── */}
        <section className="hero-section">
          {/* blobs */}
          <div className="blob-coral" style={{ top: -80, right: -120, zIndex: 0 }} />
          <div className="blob-sage"  style={{ bottom: 40, left: -100, zIndex: 0 }} />
          <div className="blob-sky"   style={{ top: "35%", left: "8%", zIndex: 0 }} />
          <div className="blob-peach" style={{ bottom: "20%", right: "10%", zIndex: 0 }} />

          

          <h1 className="dc-serif hero-headline rise rise-2">
            Talk to your<br />
            PDFs <em>honestly.</em>
          </h1>

          <p className="hero-sub rise rise-3">
            Upload any document. Ask anything.
            Get answers grounded in your exact content —
            not guesswork.
          </p>

          <div className="hero-cta rise rise-4 p-5">
            <GoToChatButton />
          </div>

         
        </section>

        {/* ── DEMO ── */}
        <div className="demo-wrap" style={{ marginBottom: 100, marginTop: -20 }}>
          <div className="demo-inner">
            <div className="demo-bar">
              <div className="dot" style={{ background: "#ffb3a7" }} />
              <div className="dot" style={{ background: "#fde8b0" }} />
              <div className="dot" style={{ background: "#c9e4ca" }} />
              <span style={{ marginLeft: 8, fontSize: 12, color: "#bbb", fontFamily: "'Geist', sans-serif" }}>
                docChat — ask your document
              </span>
            </div>
            <Image
              src="/demo.webp"
              alt="docChat app screenshot"
              width={900}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <hr className="thin-line" />

        {/* ── HOW IT WORKS ── */}
        <div className="section">
          <p className="section-label">How it works</p>
          <h2 className="dc-serif section-title">
            Three steps to <em>instant</em><br />understanding
          </h2>

          <div className="steps-grid">
            <div className="step-card">
              <span className="step-num">01</span>
              <div className="step-icon" style={{ background: "#fff5f0" }}>📄</div>
              <p className="step-title">Drop your PDF</p>
              <p className="step-body">
                Drag and drop any PDF. We chunk and embed it into a vector store — takes seconds, not minutes.
              </p>
            </div>
            <div className="step-card">
              <span className="step-num">02</span>
              <div className="step-icon" style={{ background: "#f0f9f2" }}>💬</div>
              <p className="step-title">Ask in plain language</p>
              <p className="step-body">
                Type your question naturally. No search keywords — just ask like you'd ask a colleague.
              </p>
            </div>
            <div className="step-card">
              <span className="step-num">03</span>
              <div className="step-icon" style={{ background: "#f0f6fd" }}>✦</div>
              <p className="step-title">Get source-cited answers</p>
              <p className="step-body">
                Every answer traces back to the exact passage. No hallucinations. Just the truth in your doc.
              </p>
            </div>
          </div>
        </div>

        <hr className="thin-line" />

        {/* ── USE FOR ── */}
        <div className="section">
          <p className="section-label">Built for</p>
          <h2 className="dc-serif section-title">
            Anyone who has<br />ever been <em>lost</em> in a doc
          </h2>

          <div className="use-grid">
            {[
              { emoji: "⚖️", title: "Lawyers",     desc: "Find clauses, obligations, and precedents without reading every page." },
              { emoji: "🔬", title: "Researchers", desc: "Pull findings from dense papers in a single question." },
              { emoji: "📊", title: "Analysts",    desc: "Extract data points from reports instantly." },
              { emoji: "🎓", title: "Students",    desc: "Study smarter — turn your textbook into a tutor." },
            ].map(item => (
              <div className="use-card" key={item.title}>
                <span className="use-emoji">{item.emoji}</span>
                <div>
                  <p className="use-title">{item.title}</p>
                  <p className="use-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA STRIP ── */}
        <div className="cta-strip">
          <div style={{
            position: "absolute", width: 300, height: 300,
            borderRadius: "50%", background: "#ffd4c2", opacity: 0.3,
            top: -100, right: -60, pointerEvents: "none"
          }} />
          <div style={{
            position: "absolute", width: 200, height: 200,
            borderRadius: "50%", background: "#c9e4ca", opacity: 0.35,
            bottom: -80, left: 40, pointerEvents: "none"
          }} />

          <h2 className="dc-serif cta-strip-title">
            Your PDF has the answers.<br /><em>Go find them.</em>
          </h2>
          <p className="cta-strip-sub">No sign-up needed. Just upload and ask.</p>
          <div className="hero-cta">
            <GoToChatButton />
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer>
          <div className="dc-footer">
            <span className="footer-brand">docChat</span>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <Link href="https://github.com/vaanichoudhary" target="_blank" className="footer-link">
                GitHub
              </Link>
            </div>
            <span className="footer-copy">© 2026 docChat</span>
          </div>
        </footer>
      </div>
    </ClientOnly>
  );
}