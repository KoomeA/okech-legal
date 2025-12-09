import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Building2, Gavel, Scale, Users } from "lucide-react";
import { Link } from "wouter";

export default function PracticeAreas() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/images/legal_services.jpg" 
            alt="Legal Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Practice Areas
            </h1>
            <p className="text-xl text-primary-foreground/90 font-light leading-relaxed">
              Our expertise is organized into specialized departments to ensure depth of service, 
              bridging the gap between rigid legal theory and dynamic business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Specialized Departments</h2>
            <p className="text-muted-foreground">
              We provide end-to-end legal support across four key practice departments, 
              ensuring every aspect of your business and personal legal needs is covered with technical precision.
            </p>
          </div>

          <Tabs defaultValue="dept-a" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto mb-12 gap-4 bg-transparent p-0">
              <TabsTrigger 
                value="dept-a" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border p-4 h-auto flex flex-col items-center gap-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Building2 className="w-6 h-6" />
                <span className="font-serif font-bold">Corporate & Commercial</span>
              </TabsTrigger>
              <TabsTrigger 
                value="dept-b" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border p-4 h-auto flex flex-col items-center gap-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Scale className="w-6 h-6" />
                <span className="font-serif font-bold">Real Estate & Finance</span>
              </TabsTrigger>
              <TabsTrigger 
                value="dept-c" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border p-4 h-auto flex flex-col items-center gap-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Gavel className="w-6 h-6" />
                <span className="font-serif font-bold">Dispute Resolution</span>
              </TabsTrigger>
              <TabsTrigger 
                value="dept-d" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border p-4 h-auto flex flex-col items-center gap-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Users className="w-6 h-6" />
                <span className="font-serif font-bold">Private Client</span>
              </TabsTrigger>
            </TabsList>

            {/* Department A */}
            <TabsContent value="dept-a" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Corporate Structuring & Governance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Incorporation of Private Limited Companies, Public Limited Companies (PLCs), and Limited Liability Partnerships (LLPs).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Registration of Foreign Branches and subsidiaries for multinational entities.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Company Secretarial Services: Filing Annual Returns, Board Resolutions, and maintaining statutory registers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Advisory on Directors’ duties and liabilities.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Commercial Contracts & Joint Ventures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Drafting and negotiation of complex commercial agreements including Shareholder Agreements, Franchise Agreements, and Distribution Agreements.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Structuring Joint Ventures (JVs) for real estate and infrastructure projects.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Due diligence on mergers and acquisitions (M&A).</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Tax Advisory & Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Guidance on tax obligations under the Income Tax Act, VAT Act, and Tax Procedures Act.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Representation before the Tax Appeals Tribunal (TAT).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Structuring transactions to ensure tax efficiency and compliance with KRA requirements.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Technology & Intellectual Property (IP)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Protection of intangible assets through Trademarks, Patents, and Copyrights registration at KIPI and KECOBO.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Drafting Software as a Service (SaaS) agreements and Technology Transfer contracts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Data Protection Impact Assessments (DPIA) and compliance with the Data Protection Act, 2019.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Department B */}
            <TabsContent value="dept-b" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Conveyancing & Real Estate Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Handling Sale Agreements, Transfers, and Long-term Leases for residential and commercial properties.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Development Advisory: Guiding developers through Change of User, Amalgamation, Subdivision, and obtaining approvals from County Governments and NCA.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Due Diligence: Conducting historical searches at the Land Registry and survey verifications to detect fraud or encumbrances.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Banking & Securities Perfection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Acting for Banks, Saccos, and Microfinance Institutions in the preparation and registration of securities including Charges, Mortgages, and Debentures.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Advisory on the Moveable Property Security Rights Act, 2017.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Debt restructuring and loan syndication agreements.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Department C */}
            <TabsContent value="dept-c" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Civil & Commercial Litigation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Representation in the Magistrates Courts, High Court, Court of Appeal, and Supreme Court.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Handling complex commercial disputes, breach of contract suits, and insurance claims.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Constitutional Petitions and Judicial Review applications.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Employment & Labour Relations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Representation in the Employment and Labour Relations Court (ELRC).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Defense against Unfair Termination and Wrongful Dismissal claims.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Advisory on Redundancy procedures, restructuring, and Collective Bargaining Agreements (CBAs).</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Environment & Land Court (ELC)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Resolving boundary disputes, trespass claims, and adverse possession suits.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Litigation regarding Compulsory Acquisition and compensation by the State.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Alternative Dispute Resolution (ADR)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Representation in Arbitration proceedings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Court-Annexed Mediation and private negotiation settlements to preserve business relationships.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Department D */}
            <TabsContent value="dept-d" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Family Law, Succession & Trusts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Estate Planning: Drafting of Wills, Codicils, and the creation of private Family Trusts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Probate: Petitioning for Grants of Letters of Administration (Intestate) and Grants of Probate (Testate).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Family Litigation: Divorce proceedings, Division of Matrimonial Property, and Child Custody disputes.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Immigration & Global Mobility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Processing of Class D (Employment) and Class G (Investor) Work Permits.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Applications for Permanent Residence and Kenya Citizenship.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Appeals to the Kenya Citizenship and Immigration Services (KCIS) regarding rejected permits.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Environmental Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Advisory on compliance with NEMA regulations and the Environmental Management and Co-ordination Act (EMCA).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Defense in environmental prosecution and Tribunal matters.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">Criminal Defense</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Representation in white-collar crime investigations (Anti-Corruption, Fraud).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>Bail and Bond applications and criminal trial defense.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sector Expertise Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Sector Expertise</h2>
            <p className="text-muted-foreground">
              Our firm does not operate in a vacuum. We align our legal services with the specific commercial realities of key economic sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sector 1 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-primary">Real Estate & Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Serving Developers, Contractors, Landowners, and REITs.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Project Structuring: JV models and SPVs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Construction Law: FIDIC & JBC contracts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Regulatory Approvals: NCA & NEMA compliance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Off-Plan Sales: Letters of Offer & Sale Agreements.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sector 2 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-primary">Banking & Fintech</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Serving Banks, Microfinance, Saccos, and Digital Lenders.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Lending Documentation & Syndicated Loans.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Fintech Regulation & Digital Credit Provider licensing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Recoveries, Insolvency & Debt Realization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>AML & CFT Regulatory Audits.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sector 3 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-primary">Technology & Media (TMT)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Serving Startups, Software Companies, and Creative Agencies.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Startup Fundraising (SAFE notes, Convertible notes).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>IP Commercialization & SaaS Agreements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Data Governance & DPIAs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>E-Commerce Terms & Privacy Policies.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sector 4 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-primary">Transport & Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Serving Haulage Companies, Freight Forwarders, and Importers.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Cargo Claims (Lost/Damaged goods).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Regulatory Compliance (KRA Customs, SGR).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Warehousing Leases & Fleet Management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Goods in Transit (GIT) Insurance disputes.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sector 5 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-primary">Manufacturing & FMCG</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Serving Factories, EPZ Enterprises, and Distributors.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Supply Chain Contracts & Distribution Agreements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>EPZ & SEZ Advisory for tax incentives.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Product Liability Defense & KEBS Standards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Occupational Health & Safety Audits.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sector 6 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-primary">NGOs & Civil Society</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Serving Charities, Foundations, and Religious Institutions.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Registration of NGOs, Trusts, and Societies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Income Tax & VAT Exemptions processing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Compliance filing & Immigration for expatriates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Grant Agreement reviews & Donor compliance.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sector 7 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-secondary md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-primary">Hospitality, Tourism & Conservation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Serving Hotels, Lodges, and Conservancies.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span>Advisory on licensing, land use, and operational compliance within the tourism sector.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span>Drafting Management Agreements for hotels and lodges.</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span>Conservancy Leases and Community Land agreements.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span>Employment & Labor compliance for hospitality staff.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with our specialized legal team.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-semibold">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
