# Release Notes

## v2.0.0
Date: 2024-06-20
What's In this release?

This is a major modernization of the mlb-stats-api package with significant improvements and breaking changes.

### 🚀 Major Features
- **Full TypeScript Support**: Complete type definitions for all endpoints and response types
- **Zero Runtime Dependencies**: Custom HTTP client using Node.js built-ins
- **Comprehensive API Coverage**: 72 endpoints across 22 resource categories
- **Modern Node.js**: Built for Node.js 18+ with ES6+ features

### ✨ New Endpoints Added
- Jobs (Umpires, Datacasters, Official Scorers)
- Transactions (Player moves and trades)
- Broadcasts (TV/Radio information)
- Game Types and Roster Types
- League All-Star endpoints
- Additional People, Schedule, Stats, and Teams endpoints

### 🔧 Technical Improvements
- Custom HTTP client replacing broken fetch implementation
- Expanded test coverage from 23 to 57 comprehensive tests
- ESLint configuration for code quality
- Proper error handling with detailed response objects
- Complete documentation overhaul

### 📚 Documentation
- Comprehensive README with TypeScript examples
- Complete endpoint reference (ENDPOINTS.md)
- Type usage examples and best practices

### 🐛 Bug Fixes
- Fixed Jobs module export (was implemented but not accessible)
- Corrected API endpoint URLs and parameter handling
- Fixed async/await compatibility issues
- Resolved timeout issues in tests

### ⚠️ Breaking Changes
- Requires Node.js 18+ (previously 18.x)
- Some endpoint method signatures may have changed
- Package now includes TypeScript types by default

### 📊 Statistics
- 72 total endpoints (up from ~45)
- 57 tested endpoints with comprehensive coverage
- Zero security vulnerabilities
- Lightweight package with no runtime dependencies

## v1.0.8
Date: 2019-07-16
What's In this release?
This is the first complete release! 
It contains the working implementation of most of the known
API requests supported by the mlb-stats-api, only excluding the metadata API which is requestable by
type.
This tests includes a function testsuite, with a reasonable level of code coverage.
