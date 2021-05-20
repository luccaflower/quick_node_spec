# Quick Node Spec README

Simple command that creates a test specification file from a template.

![quick-node-spec-demo](https://user-images.githubusercontent.com/60967674/118962716-f51bb000-b965-11eb-8a5e-68d05b82e8b5.gif)

## Configuration

This extension can be configured with the following settings:

| Name                                |	Description	                                            | Default                   |
|-------------------------------------|---------------------------------------------------------|---------------------------|
| quick-node-spec.testFolder	        | Test specifications are saved to this folder.	          | ${workspaceFolder}/test   |
| quick-node-spec.javascript.template	| Template to use for the test specification	            | mocha-chai-bdd            |
| quick-node-spec.javascript.ext	    | File extention to append to the test specification file	| .spec.js                  |
| quick-node-spec.typescript.template	| Template to use for the test specification	            | mocha-chai-bdd            |
| quick-node-spec.typescript.ext	    | File extention to append to the test specification file	| .spec.ts                  |
