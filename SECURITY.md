# Security Policy

## Supported Versions

We actively support the following versions of fandom-sdk:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please follow these steps:

### 1. **Do Not** Create a Public Issue

Please **do not** report security vulnerabilities through public GitHub issues.

### 2. Report Privately

Send a detailed report to:

- **Email**: [jonasfranke@sdevs.org](mailto:jonasfranke@sdevs.org)
- **GitHub Security Advisory**: Use the [Security Advisory](https://github.com/builtbyjonas/fandom-sdk/security/advisories/new) feature

### 3. Include Details

Your report should include:

- Description of the vulnerability
- Steps to reproduce the issue
- Affected versions
- Potential impact
- Suggested fix (if any)

### 4. Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 7 days
- **Fix Timeline**: Varies based on severity
- **Disclosure**: After fix is released

## Security Best Practices

When using fandom-sdk:

1. **Keep Dependencies Updated**: Regularly update to the latest version
2. **Input Validation**: Always validate user inputs before passing to SDK methods
3. **Rate Limiting**: Implement appropriate rate limiting for API calls
4. **Error Handling**: Don't expose sensitive information in error messages
5. **HTTPS Only**: Always use HTTPS for API communications

## Security Features

- Input sanitization for all API parameters
- Built-in request validation
- Error handling without information leakage
- No sensitive data stored in logs

## Scope

This security policy applies to:

- The fandom-sdk npm package
- Example code and documentation
- Related build tools and scripts

## Contact

For security-related questions that don't constitute a vulnerability, you can:

- Create a discussion in the [GitHub Discussions](https://github.com/builtbyjonas/fandom-sdk/discussions)
- Contact the maintainer at [jonasfranke@sdevs.org](mailto:jonasfranke@sdevs.org)

## Attribution

We appreciate security researchers who responsibly disclose vulnerabilities. With your permission, we'll acknowledge your contribution in:

- Release notes
- Security advisories
- Project documentation
